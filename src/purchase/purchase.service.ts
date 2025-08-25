import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePurchaseOrderDto } from './dto/create-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserJwtPayload } from 'src/auth/types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
// import { UpdatePurchaseDto } from './dto/update-purchase.dto';

@Injectable()
export class PurchaseService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreatePurchaseOrderDto, user: UserJwtPayload) {
    try {
      const purchaseOrder = await this.prisma.$transaction(async (tx) => {
        // Step 1: Create the purchase order
        const order = await tx.purchaseOrder.create({
          data: {
            pharmacy_id: user.pharmacy_id,
            supplier_id: dto.supplier_id,
            status: 'PENDING',
            order_date: new Date(),
            delivery_date: dto.deliveryDate,
          },
        });
        // Step 2: Create purchase order items
        console.log(dto.items);
        const orderItemsData = dto.items.map((item) => ({
          order_id: order.id,
          medicine_id: item.medicine_id,
          quantity: item.quantity,
          unit_price: item.unit_price,
        }));
        console.log(orderItemsData);

        await tx.purchaseOrderItem.createMany({
          data: orderItemsData,
        });

        return order;
      });

      return purchaseOrder;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException(error);
      }
    }
  }

  async findAll() {
    const purchase = await this.prisma.purchaseOrder.findMany();
    if (!purchase) {
      return 'there is no purchases to show';
    }
    return purchase;
  }

  async findOne(id: number) {
    const purchase = await this.prisma.purchaseOrder.findUnique({
      where: {
        id: id,
      },
    });
    if (!purchase) {
      return 'not found please verify credintials';
    }
    return purchase;
  }

  // update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
  //   return `This action updates a #${id} purchase`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} purchase`;
  // }
}
