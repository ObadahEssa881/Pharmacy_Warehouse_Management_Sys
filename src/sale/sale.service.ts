import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { buildPagination, PaginationDto } from '../common/pagination';
import { UserJwtPayload } from '../auth/types/user.types';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}

  private pharmacyScope(user: UserJwtPayload) {
    if (!user.pharmacy_id) throw new ForbiddenException('Must be a pharmacy');
    return { pharmacy_id: user.pharmacy_id };
  }

  async create(user: UserJwtPayload, dto: CreateSaleDto) {
    return this.prisma.$transaction(async (tx) => {
      const sale = await tx.sale.create({
        data: {
          ...this.pharmacyScope(user),
          customer_name: dto.customer_name,
          total_amount: dto.items
            .reduce((sum, it) => sum + Number(it.unit_price) * it.quantity, 0)
            .toString(),
          payment_mode: dto.payment_mode,
        },
      });

      await tx.saleItem.createMany({
        data: dto.items.map((it) => ({
          sale_id: sale.id,
          medicine_id: it.medicine_id,
          quantity: it.quantity,
          unit_price: it.unit_price,
        })),
      });

      // Deduct inventory (can go negative if out of stock)
      for (const it of dto.items) {
        await tx.inventory.updateMany({
          where: {
            medicine_id: it.medicine_id,
            pharmacy_id: user.pharmacy_id,
          },
          data: { quantity: { decrement: it.quantity } },
        });
      }

      return sale;
    });
  }

  async paginate(user: UserJwtPayload, q: PaginationDto) {
    return this.prisma.sale.findMany({
      where: this.pharmacyScope(user),
      include: { SaleItems: true },
      orderBy: { sale_date: 'desc' },
      ...buildPagination(q),
    });
  }
}
