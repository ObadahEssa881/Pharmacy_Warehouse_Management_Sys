import { Controller, Post, Get, Query, Body, UseGuards } from '@nestjs/common';
import { JwtGuard, RoleGuard } from '../auth/guard';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { PaginationDto } from '../common/pagination/pagination.dto';
import { GetUser } from '../common/decorators/get‑user.decorator';

@Controller('sales')
@UseGuards(JwtGuard, RoleGuard)
export class SaleController {
  constructor(private readonly service: SaleService) {}

  @Post()
  create(@GetUser() user, @Body() dto: CreateSaleDto) {
    return this.service.create(user, dto);
  }

  @Get()
  paginate(@GetUser() user, @Query() q: PaginationDto) {
    return this.service.paginate(user, q);
  }
}
