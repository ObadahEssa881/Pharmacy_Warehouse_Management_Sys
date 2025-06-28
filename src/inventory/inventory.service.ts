import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInventoryDto, UpdateInventoryDto } from './dto/index';
import { UserJwtPayload } from 'src/auth/types'; // <-- Assuming your JWT payload type
import { buildPagination, PaginationDto } from 'src/common/pagination';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async findAll(user: UserJwtPayload, p: PaginationDto) {
    const { skip, take } = buildPagination(p);

    const where = ['PHARMACIST', 'PHARMACY_OWNER'].includes(user.role)
      ? { pharmacy_id: user.pharmacy_id }
      : { warehouse_id: user.warehouse_id };

    const [inventories, total] = await this.prisma.$transaction([
      this.prisma.inventory.findMany({
        skip,
        take,
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
        page: p.page ?? 1,
        limit: p.limit ?? 10,
        pages: Math.ceil(total / (p.limit ?? 10)),
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
}
