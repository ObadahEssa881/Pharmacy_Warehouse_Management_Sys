import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { JwtGuard, RoleGuard } from 'src/auth/guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
@Roles('SUPPLIER_ADMIN')
@UseGuards(JwtGuard, RoleGuard)
@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get()
  findAll() {
    return this.supplierService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.supplierService.findOne(email);
  }

  @Delete('delete/:email')
  remove(@Param('email') email: string) {
    return this.supplierService.remove(email);
  }
}
