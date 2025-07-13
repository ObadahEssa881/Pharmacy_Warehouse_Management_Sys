import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtGuard, RoleGuard } from '../auth/guard';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto, UpdatePurchaseStatusDto } from './dto';
import { PaginationDto } from '../common/pagination/pagination.dto';
import { GetUser } from '../common/decorators/get‑user.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('purchase-orders')
@UseGuards(JwtGuard, RoleGuard)
export class PurchaseController {
  constructor(private readonly service: PurchaseService) {}

  @Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN')
  @Post()
  create(@GetUser() user, @Body() dto: CreatePurchaseDto) {
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

  @Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN')
  @Patch(':id/status')
  updateStatus(
    @GetUser() user,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePurchaseStatusDto,
  ) {
    return this.service.updateStatus(user, id, dto);
  }
}
