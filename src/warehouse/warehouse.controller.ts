// warehouse.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { JwtGuard, RoleGuard } from '../auth/guard';
import { CreateWarehouseDto, UpdateWarehouseDto } from './dto/index';
import { User } from 'src/auth/decorators';
import { UserJwtPayload } from 'src/auth/types';
import { Roles } from 'src/auth/decorators/roles.decorator';

@UseGuards(JwtGuard, RoleGuard)
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  // @Roles('')
  @Get()
  async getAllWarehouses() {
    return await this.warehouseService.getAllWarehouses();
  }

  @Roles('PHARMACIST', 'PHARMACY_OWNER')
  @Get('inventory')
  getWarehouseInventory(
    @User() user: UserJwtPayload,
    @Query('warehouseId') warehouseIdFromQuery?: string,
  ) {
    const { pharmacy_id, warehouse_id } = user;
    const targetWarehouseId = warehouseIdFromQuery
      ? parseInt(warehouseIdFromQuery)
      : warehouse_id;
    console.log(targetWarehouseId);
    return this.warehouseService.getWarehouseInventory(
      pharmacy_id,
      targetWarehouseId,
    );
  }

  @Roles('PHARMACIST', 'PHARMACY_OWNER', 'SUPPLIER_ADMIN')
  @Get(':id')
  getWarehouseById(@Param('id') id: string, @User() user: UserJwtPayload) {
    const { pharmacy_id, warehouse_id } = user;
    return this.warehouseService.getWarehouseById(
      id,
      pharmacy_id,
      warehouse_id,
    );
  }

  @Roles()
  @Post()
  createWarehouse(
    @Body() createWarehouseDto: CreateWarehouseDto,
    @User() user: UserJwtPayload,
  ) {
    const { pharmacy_id } = user;
    return this.warehouseService.createWarehouse(
      createWarehouseDto,
      pharmacy_id,
    );
  }

  @Roles()
  @Put(':id')
  updateWarehouse(
    @Param('id') id: string,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
    @User() user: UserJwtPayload,
  ) {
    const { pharmacy_id, warehouse_id } = user;
    return this.warehouseService.updateWarehouse(
      id,
      updateWarehouseDto,
      pharmacy_id,
      warehouse_id,
    );
  }

  @Roles()
  @Delete(':id')
  deleteWarehouse(@Param('id') id: string, @User() user: UserJwtPayload) {
    const { pharmacy_id } = user;
    return this.warehouseService.deleteWarehouse(id, pharmacy_id);
  }
}
