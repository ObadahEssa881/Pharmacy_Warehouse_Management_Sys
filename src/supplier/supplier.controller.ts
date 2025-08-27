import {
  Controller,
  Get,
  Param,
  Delete,
  UseGuards,
  Patch,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { JwtGuard, RoleGuard } from 'src/auth/guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserJwtPayload } from 'src/auth/types';
import { PurchaseStatus } from 'src/common/enums/purchase‑status.enum';
import { User } from 'src/auth/decorators';
@UseGuards(JwtGuard, RoleGuard)
@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Roles('SUPPLIER_ADMIN')
  @Get()
  findAll() {
    return this.supplierService.findAll();
  }

  @Roles('SUPPLIER_ADMIN')
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.supplierService.findOne(email);
  }

  @Roles('SUPPLIER_ADMIN')
  @Delete('delete/:email')
  remove(@Param('email') email: string) {
    return this.supplierService.remove(email);
  }
  // GET /suppliers/me/purchase-orders
  @Get('me/purchase-orders')
  @Roles('SUPPLIER_EMPLOYEE')
  getMyOrders(@User() user: UserJwtPayload) {
    return this.supplierService.getOrdersBySupplier(user);
  }
  @Patch(':id/status')
  @Roles('SUPPLIER_EMPLOYEE')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: { status: PurchaseStatus },
    @User() user: UserJwtPayload,
  ) {
    return this.supplierService.updateStatus(user, id, dto.status);
  }
}
