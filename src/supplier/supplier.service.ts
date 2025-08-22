import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserJwtPayload } from 'src/auth/types';
import { PurchaseStatus } from 'src/common/enums/purchase‑status.enum';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SupplierService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    const supplier = await this.prisma.supplier.findMany();
    if (!supplier) {
      return 'there is no users to show';
    }
    return supplier;
  }

  async findOne(email: string) {
    const supplier = await this.prisma.supplier.findUnique({
      where: {
        email: email,
      },
    });
    if (!supplier) {
      return 'not found please verify credintials';
    }
    return supplier;
  }

  async remove(email: string) {
    const supplier = await this.prisma.supplier.delete({
      where: {
        email: email,
      },
    });
    if (!supplier) {
      return 'not found please verify credintials';
    }
    return `the user ${email} deleted`;
  }
  async getOrdersBySupplier(User: UserJwtPayload) {
    const userId = User.id;
    const supplier = await this.prisma.supplier.findUnique({
      where: { id: userId },
    });
    if (!supplier) throw new ForbiddenException('Not a supplier');

    return this.prisma.purchaseOrder.findMany({
      where: { supplier_id: supplier.id },
      include: { PurchaseOrderItems: true, pharmacy: true },
    });
  }
  async updateStatus(
    User: UserJwtPayload,
    orderId: number,
    status: PurchaseStatus,
  ) {
    const supplier = await this.prisma.supplier.findUnique({
      where: { id: User.id },
    });
    if (!supplier) throw new ForbiddenException();

    const order = await this.prisma.purchaseOrder.findUnique({
      where: { id: orderId },
    });
    if (!order || order.supplier_id !== supplier.id)
      throw new ForbiddenException('Not your order');

    return this.prisma.purchaseOrder.update({
      where: { id: orderId },
      data: { status },
    });
  }
}
