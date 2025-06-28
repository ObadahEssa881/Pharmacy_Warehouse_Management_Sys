import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePurchaseDto, UpdatePurchaseStatusDto } from './dto';
import { buildPagination, PaginationDto } from '../common/pagination/index';
import { PurchaseStatus } from '../common/enums/purchase‑status.enum';
import { UserJwtPayload } from '../auth/types/user.types';

@Injectable()
export class PurchaseService {
  constructor(private readonly prisma: PrismaService) {}

  private pharmacyScope(user: UserJwtPayload) {
    if (!user.pharmacy_id)
      throw new ForbiddenException('Must be a pharmacy account');
    return { pharmacy_id: user.pharmacy_id };
  }

  /** CREATE purchase + items + invoice in one transaction */
  async create(user: UserJwtPayload, dto: CreatePurchaseDto) {
    return this.prisma.$transaction(async (tx) => {
      const order = await tx.purchaseOrder.create({
        data: {
          supplier_id: dto.supplier_id,
          status: PurchaseStatus.PENDING,
          ...this.pharmacyScope(user),
        },
      });

      await tx.purchaseOrderItem.createMany({
        data: dto.items.map((it) => ({
          order_id: order.id,
          medicine_id: it.medicine_id,
          quantity: it.quantity,
          unit_price: it.unit_price,
        })),
      });

      await tx.invoice.create({
        data: {
          order_id: order.id,
          supplier_id: dto.supplier_id,
          total_amount: dto.items
            .reduce((sum, it) => sum + Number(it.unit_price) * it.quantity, 0)
            .toString(),
          payment_status: 'UNPAID',
        },
      });

      return order;
    });
  }

  async paginate(user: UserJwtPayload, q: PaginationDto) {
    return this.prisma.purchaseOrder.findMany({
      where: this.pharmacyScope(user),
      include: { PurchaseOrderItems: true, Invoice: true },
      orderBy: { order_date: 'desc' },
      ...buildPagination(q),
    });
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
    if (!order) throw new NotFoundException();
    if (order.pharmacy_id !== user.pharmacy_id) throw new ForbiddenException();
    if (order.status !== PurchaseStatus.PENDING)
      throw new BadRequestException('Order already processed');

    return this.prisma.$transaction(async (tx) => {
      if (dto.status === PurchaseStatus.APPROVED) {
        // Move inventory
        for (const item of order.PurchaseOrderItems) {
          // 1. decrement warehouse
          await tx.inventory.updateMany({
            where: {
              medicine_id: item.medicine_id,
              warehouse_id: user.warehouse_id, // Pharmacy knows which warehouse it ordered from
            },
            data: { quantity: { decrement: item.quantity } },
          });

          // 2. increment (or create) pharmacy inventory
          const inv = await tx.inventory.findFirst({
            where: {
              medicine_id: item.medicine_id,
              pharmacy_id: user.pharmacy_id,
            },
          });

          if (inv) {
            await tx.inventory.update({
              where: { id: inv.id },
              data: { quantity: { increment: item.quantity } },
            });
          } else {
            await tx.inventory.create({
              data: {
                medicine_id: item.medicine_id,
                pharmacy_id: user.pharmacy_id,
                location_type: 'PHARMACY',
                quantity: item.quantity,
                cost_price: item.unit_price,
                selling_price: item.unit_price, // you may change
                expiry_date: new Date(), // unknown; override later
              },
            });
          }
        }
      }

      return tx.purchaseOrder.update({
        where: { id },
        data: { status: dto.status },
        include: { PurchaseOrderItems: true, Invoice: true },
      });
    });
  }
}
