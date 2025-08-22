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
  ParseIntPipe,
} from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { JwtGuard, RoleGuard } from '../auth/guard';
import { CreateWarehouseDto, UpdateWarehouseDto } from './dto/index';
import { User } from 'src/auth/decorators';
import { UserJwtPayload } from 'src/auth/types';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { PurchaseService } from 'src/purchase/purchase.service';

@UseGuards(JwtGuard, RoleGuard)
@Controller('warehouse')
export class WarehouseController {
  constructor(
    private readonly warehouseService: WarehouseService,
    private readonly purchaseService: PurchaseService,
  ) {}

  @Get()
  async getAllWarehouses(@User() user: UserJwtPayload) {
    console.log(user);
    return await this.warehouseService.getAllWarehouses();
  }

  @Roles('PHARMACIST', 'PHARMACY_OWNER')
  @Get(':warehouseId/inventory')
  async getWarehouseInventory(
    @Param('warehouseId', ParseIntPipe) warehouseId: number,
    @User() user: UserJwtPayload,
  ) {
    console.log(user);
    const { pharmacy_id, warehouse_id } = user;
    return this.warehouseService.getWarehouseInventory(
      pharmacy_id,
      warehouseId,
    );
  }

  /** NEW: Public endpoint for pharmacy owners to view warehouse inventory */
  @Roles('PHARMACY_OWNER')
  @Get('public/:warehouseId/inventory')
  async getPublicWarehouseInventory(
    @Param('warehouseId', ParseIntPipe) warehouseId: number,
    @User() user: UserJwtPayload,
  ) {
    console.log(
      111111111111111111111111111111111111111111111111111111111111111111111111111111111,
    );
    console.log(
      111111111111111111111111111111111111111111111111111111111111111111111111111111111,
    );
    console.log(
      111111111111111111111111111111111111111111111111111111111111111111111111111111111,
    );
    return this.warehouseService.getPublicWarehouseInventory(warehouseId);
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

  @Roles('PHARMACY_OWNER')
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

  @Roles('PHARMACY_OWNER')
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

  @Roles('PHARMACY_OWNER')
  @Delete(':id')
  deleteWarehouse(@Param('id') id: string, @User() user: UserJwtPayload) {
    const { pharmacy_id } = user;
    return this.warehouseService.deleteWarehouse(id, pharmacy_id);
  }
}
