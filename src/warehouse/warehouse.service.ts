// warehouse.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWarehouseDto, UpdateWarehouseDto } from './dto';

@Injectable()
export class WarehouseService {
  constructor(private prisma: PrismaService) {}

  async getAllWarehouses() {
    return this.prisma.warehouse.findMany();
  }

  async getWarehouseInventory(pharmacyId: number, targetWarehouseId: number) {
    const inventory = await this.prisma.inventory.findMany({
      where: {
        warehouse_id: targetWarehouseId,
        location_type: 'WAREHOUSE',
      },
      include: {
        medicine: true,
      },
    });

    if (!inventory.length) {
      throw new NotFoundException('No inventory found for this warehouse');
    }

    return inventory;
  }

  async getWarehouseById(id: string, pharmacyId: number, warehouseId: number) {
    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id: Number(id) },
    });

    if (!warehouse) throw new Error('Warehouse not found');

    if (warehouse.owner_id !== pharmacyId && warehouse.id !== warehouseId) {
      throw new Error('Unauthorized access to warehouse');
    }

    return warehouse;
  }

  async createWarehouse(dto: CreateWarehouseDto, pharmacyId: number) {
    return this.prisma.warehouse.create({
      data: {
        ...dto,
        owner_id: pharmacyId,
      },
    });
  }

  async updateWarehouse(
    id: string,
    dto: UpdateWarehouseDto,
    pharmacyId: number,
    warehouseId: number,
  ) {
    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id: Number(id) },
    });

    if (!warehouse) throw new Error('Warehouse not found');

    if (warehouse.owner_id !== pharmacyId && warehouse.id !== warehouseId) {
      throw new Error('Unauthorized access to update warehouse');
    }

    return this.prisma.warehouse.update({
      where: { id: Number(id) },
      data: dto,
    });
  }

  async deleteWarehouse(id: string, pharmacyId: number) {
    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id: Number(id) },
    });

    if (!warehouse) throw new Error('Warehouse not found');

    if (warehouse.owner_id !== pharmacyId) {
      throw new Error('Unauthorized access to delete warehouse');
    }

    await this.prisma.warehouse.delete({ where: { id: Number(id) } });
    return { message: 'Warehouse deleted successfully' };
  }
}
