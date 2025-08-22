// sale.service.ts

import {
  Injectable,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UserJwtPayload } from '../auth/types/user.types';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: UserJwtPayload, dto: CreateSaleDto) {
    const pharmacyId = user.pharmacy_id;

    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('Sale must include at least one item');
    }

    // Validate and calculate total amount
    let totalAmount = 0;
    for (let i = 0; i < dto.items.length; i++) {
      const item = dto.items[i];

      if (!item.medicine_id || item.medicine_id <= 0) {
        throw new BadRequestException(
          `Item at index ${i} has invalid medicine_id`,
        );
      }

      const quantity = Number(item.quantity);
      if (isNaN(quantity) || quantity <= 0) {
        throw new BadRequestException(
          `Item at index ${i} has invalid quantity`,
        );
      }

      const unitPrice = Number(item.unit_price);
      console.log(item);
      if (isNaN(unitPrice) || unitPrice <= 0) {
        throw new BadRequestException(
          `Item at index ${i} has invalid unit_price`,
        );
      }

      totalAmount += quantity * unitPrice;
    }

    return this.prisma.$transaction(async (tx) => {
      // Step 1: Create the sale
      const sale = await tx.sale.create({
        data: {
          pharmacy: { connect: { id: user.pharmacy_id } },
          customer_name: dto.customer_name,
          payment_mode: dto.payment_mode,
          total_amount: totalAmount,
        },
      });

      // Step 2: Create sale items
      await tx.saleItem.createMany({
        data: dto.items.map((it) => ({
          sale_id: sale.id,
          medicine_id: it.medicine_id,
          quantity: it.quantity,
          unit_price: it.unit_price,
          cost_price: it.cost_price,
        })),
      });

      // Step 3: Deduct from inventory for each medicine sold
      for (const item of dto.items) {
        const inventory = await tx.inventory.findFirst({
          where: {
            medicine_id: item.medicine_id,
            pharmacy_id: pharmacyId,
          },
        });

        if (!inventory) {
          throw new ForbiddenException(
            `Medicine ID ${item.medicine_id} not found in your inventory`,
          );
        }

        if (inventory.quantity < item.quantity) {
          throw new ForbiddenException(
            `Not enough stock for medicine ID ${item.medicine_id}. Available: ${inventory.quantity}, Requested: ${item.quantity}`,
          );
        }

        await tx.inventory.update({
          where: { id: inventory.id },
          data: { quantity: { decrement: item.quantity } },
        });
      }

      return sale;
    });
  }

  async paginate(user: UserJwtPayload, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [sales, total] = await this.prisma.$transaction([
      this.prisma.sale.findMany({
        where: { pharmacy_id: user.pharmacy_id },
        include: {
          SaleItems: {
            include: {
              medicine: true,
            },
          },
        },
        orderBy: { sale_date: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.sale.count({ where: { pharmacy_id: user.pharmacy_id } }),
    ]);

    return {
      sales,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }
}
