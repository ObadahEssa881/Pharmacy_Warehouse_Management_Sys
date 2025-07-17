// sale.controller.ts

import { Controller, Post, Get, Query, Body, UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from '../auth/guard';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { GetUser } from '../common/decorators/get‑user.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('sales')
@UseGuards(JwtGuard, RoleGuard)
@Roles('PHARMACY_OWNER', 'PHARMACIST')
export class SaleController {
  constructor(private readonly service: SaleService) {}

  @Post()
  create(@GetUser() user, @Body() dto: CreateSaleDto) {
    return this.service.create(user, dto);
  }

  @Get()
  paginate(
    @GetUser() user,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.service.paginate(user, page, limit);
  }
}
