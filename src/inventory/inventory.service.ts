import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInventoryDto, UpdateInventoryDto } from './dto/index';
import { UserJwtPayload } from 'src/auth/types'; // <-- Assuming your JWT payload type

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  // inventory.service.ts

  async findAll(user: UserJwtPayload, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const where = ['PHARMACIST', 'PHARMACY_OWNER'].includes(user.role)
      ? { pharmacy_id: user.pharmacy_id }
      : { warehouse_id: user.warehouse_id };
    console.log(user.pharmacy_id);

    const [inventories, total] = await this.prisma.$transaction([
      this.prisma.inventory.findMany({
        skip,
        take: limit,
        where,
        orderBy: { id: 'asc' },
        include: { medicine: true },
      }),
      this.prisma.inventory.count({ where }),
    ]);

    return {
      message: inventories.length
        ? 'Inventory fetched successfully'
        : 'No inventory found for this user.',
      data: inventories,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: number, user: UserJwtPayload) {
    const where =
      user.role === 'PHARMACIST' || user.role === 'PHARMACY_OWNER'
        ? { id, pharmacy_id: user.pharmacy_id }
        : { id, warehouse_id: user.warehouse_id };

    const inventory = await this.prisma.inventory.findFirst({
      where,
      include: { medicine: true },
    });

    if (!inventory) throw new NotFoundException('Inventory item not found.');

    return { message: 'Inventory item found.', data: inventory };
  }

  async create(dto: CreateInventoryDto, user: UserJwtPayload) {
    if (user.role === 'PHARMACIST' || user.role === 'PHARMACY_OWNER') {
      const pharmacy = await this.prisma.pharmacy.findUnique({
        where: { id: user.pharmacy_id },
      });
      if (!pharmacy) throw new BadRequestException('Pharmacy not found');

      const inventory = await this.prisma.inventory.create({
        data: {
          medicine_id: dto.medicine_id,
          pharmacy_id: user.pharmacy_id,
          location_type: 'PHARMACY',
          quantity: dto.quantity,
          cost_price: dto.cost_price,
          selling_price: dto.selling_price,
          expiry_date: dto.expiry_date,
        },
      });

      return { message: 'Inventory created for pharmacy', data: inventory };
    }

    if (user.role === 'supplier') {
      const warehouse = await this.prisma.warehouse.findUnique({
        where: { id: user.warehouse_id },
      });
      if (!warehouse) throw new BadRequestException('Warehouse not found');

      const inventory = await this.prisma.inventory.create({
        data: {
          medicine_id: dto.medicine_id,
          warehouse_id: user.warehouse_id,
          location_type: 'WAREHOUSE',
          quantity: dto.quantity,
          cost_price: dto.cost_price,
          selling_price: dto.selling_price,
          expiry_date: dto.expiry_date,
        },
      });

      return { message: 'Inventory created for warehouse', data: inventory };
    }

    throw new BadRequestException('Invalid user context');
  }

  async update(id: number, dto: UpdateInventoryDto, user: UserJwtPayload) {
    const where =
      user.role === 'PHARMACIST' || user.role === 'PHARMACY_OWNER'
        ? { id, pharmacy_id: user.pharmacy_id }
        : { id, warehouse_id: user.warehouse_id };

    const existing = await this.prisma.inventory.findFirst({ where });
    if (!existing) throw new NotFoundException('Inventory item not found.');

    const updated = await this.prisma.inventory.update({
      where: { id },
      data: { ...dto, last_updated: new Date() },
    });

    return { message: 'Inventory item updated.', data: updated };
  }

  async remove(id: number, user: UserJwtPayload) {
    const where =
      user.role === 'PHARMACIST' || user.role === 'PHARMACY_OWNER'
        ? { id, pharmacy_id: user.pharmacy_id }
        : { id, warehouse_id: user.warehouse_id };

    const existing = await this.prisma.inventory.findFirst({ where });
    if (!existing) throw new NotFoundException('Inventory item not found.');

    await this.prisma.inventory.delete({ where: { id } });

    return { message: 'Inventory item deleted.' };
  }

  async findExpiringSoon(user: UserJwtPayload) {
    // Calculate date 3 months from now
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);

    // Determine where clause based on user role
    const where = ['PHARMACIST', 'PHARMACY_OWNER'].includes(user.role)
      ? {
          pharmacy_id: user.pharmacy_id,
          expiry_date: {
            lte: threeMonthsFromNow,
          },
        }
      : {
          warehouse_id: user.warehouse_id,
          expiry_date: {
            lte: threeMonthsFromNow,
          },
        };

    const expiringItems = await this.prisma.inventory.findMany({
      where,
      include: { medicine: true },
      orderBy: { expiry_date: 'asc' },
    });

    return {
      message: expiringItems.length
        ? 'Expiring inventory items found'
        : 'No expiring inventory items found',
      data: expiringItems,
      count: expiringItems.length,
    };
  }

  async findLowStock(user: UserJwtPayload) {
    // Determine where clause based on user role
    const where = ['PHARMACIST', 'PHARMACY_OWNER'].includes(user.role)
      ? {
          pharmacy_id: user.pharmacy_id,
          quantity: {
            lt: 2,
          },
        }
      : {
          warehouse_id: user.warehouse_id,
          quantity: {
            lt: 2,
          },
        };

    const lowStockItems = await this.prisma.inventory.findMany({
      where,
      include: { medicine: true },
      orderBy: { quantity: 'asc' },
    });

    return {
      message: lowStockItems.length
        ? 'Low stock inventory items found'
        : 'No low stock inventory items found',
      data: lowStockItems,
      count: lowStockItems.length,
    };
  }
}
