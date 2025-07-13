import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePurchaseDto, UpdatePurchaseStatusDto } from './dto';
import { buildPagination } from '../common/pagination/index';
import { PurchaseStatus } from '../common/enums/purchase‑status.enum';
import { UserJwtPayload } from '../auth/types/user.types';

@Injectable()
export class PurchaseService {
  constructor(private readonly prisma: PrismaService) {}

  private pharmacyScope(user: UserJwtPayload) {
    if (!user.pharmacy_id)
      throw new ForbiddenException('Must be associated with a pharmacy');
    return { pharmacy_id: user.pharmacy_id };
  }

  /** CREATE purchase + items + invoice in one transaction */
  async create(user: UserJwtPayload, dto: CreatePurchaseDto) {
    if (!dto.items || dto.items.length === 0) {
      throw new BadRequestException('Purchase must include at least one item');
    }

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
      if (isNaN(unitPrice) || unitPrice <= 0) {
        throw new BadRequestException(
          `Item at index ${i} has invalid unit_price`,
        );
      }

      totalAmount += quantity * unitPrice;
    }

    return this.prisma.$transaction(async (tx) => {
      // Step 1: Create purchase order
      const order = await tx.purchaseOrder.create({
        data: {
          supplier_id: dto.supplier_id,
          status: PurchaseStatus.PENDING,
          ...this.pharmacyScope(user),
        },
      });

      // Step 2: Create purchase order items
      await tx.purchaseOrderItem.createMany({
        data: dto.items.map((it) => ({
          order_id: order.id,
          medicine_id: it.medicine_id,
          quantity: it.quantity,
          unit_price: it.unit_price,
        })),
      });

      // Step 3: Create invoice
      await tx.invoice.create({
        data: {
          order_id: order.id,
          supplier_id: dto.supplier_id,
          total_amount: totalAmount,
          payment_status: 'UNPAID',
        },
      });

      return order;
    });
  }

  async paginate(user: UserJwtPayload, page: number = 1, limit: number = 10) {
    const { skip, take } = buildPagination(page, limit);

    const [orders, total] = await this.prisma.$transaction([
      this.prisma.purchaseOrder.findMany({
        where: this.pharmacyScope(user),
        include: { PurchaseOrderItems: true, Invoice: true },
        orderBy: { order_date: 'desc' },
        skip,
        take,
      }),
      this.prisma.purchaseOrder.count({ where: this.pharmacyScope(user) }),
    ]);

    return {
      orders,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }

  /** Approve / Reject & move stock */
  async updateStatus(
    user: UserJwtPayload,
    id: number,
    dto: UpdatePurchaseStatusDto,
  ) {
    const order = await this.prisma.purchaseOrder.findUnique({
      where: { id },
      include: { PurchaseOrderItems: true },
    });

    if (!order) throw new NotFoundException('Purchase order not found');
    if (order.pharmacy_id !== user.pharmacy_id)
      throw new ForbiddenException('Not authorized for this pharmacy');
    if (order.status !== PurchaseStatus.PENDING)
      throw new BadRequestException('Order already processed');

    return this.prisma.$transaction(async (tx) => {
      if (dto.status === PurchaseStatus.APPROVED) {
        for (const item of order.PurchaseOrderItems) {
          // 1. Check if warehouse has enough stock
          const warehouseInventory = await tx.inventory.findFirst({
            where: {
              medicine_id: item.medicine_id,
              warehouse_id: user.warehouse_id,
            },
          });

          if (
            !warehouseInventory ||
            warehouseInventory.quantity < item.quantity
          ) {
            throw new BadRequestException(
              `Not enough stock in warehouse for medicine ID ${item.medicine_id}`,
            );
          }

          // 2. Deduct from warehouse
          await tx.inventory.update({
            where: { id: warehouseInventory.id },
            data: { quantity: { decrement: item.quantity } },
          });

          // 3. Add to pharmacy inventory
          const pharmacyInventory = await tx.inventory.findFirst({
            where: {
              medicine_id: item.medicine_id,
              pharmacy_id: user.pharmacy_id,
            },
          });

          if (pharmacyInventory) {
            // Increment existing inventory
            await tx.inventory.update({
              where: { id: pharmacyInventory.id },
              data: {
                quantity: { increment: item.quantity },
                cost_price: item.unit_price,
                last_updated: new Date(),
              },
            });
          } else {
            // Create new inventory entry
            await tx.inventory.create({
              data: {
                medicine_id: item.medicine_id,
                pharmacy_id: user.pharmacy_id,
                location_type: 'PHARMACY',
                quantity: item.quantity,
                cost_price: item.unit_price,
                selling_price: Number(item.unit_price) * 1.2, // Optional: set markup
                expiry_date: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // e.g., +1 year
              },
            });
          }
        }
      }

      // Update order status
      return tx.purchaseOrder.update({
        where: { id },
        data: { status: dto.status },
        include: { PurchaseOrderItems: true, Invoice: true },
      });
    });
  }
}
