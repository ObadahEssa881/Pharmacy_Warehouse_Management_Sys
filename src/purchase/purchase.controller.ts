import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  // Delete,
  UseGuards,
} from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase.dto';
// import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtGuard, RoleGuard } from 'src/auth/guard';
import { User } from 'src/auth/decorators';
import { UserJwtPayload } from 'src/auth/types';
@Roles('PHARMACY_OWNER')
@UseGuards(JwtGuard, RoleGuard)
@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post('create')
  create(@Body() dto: CreatePurchaseOrderDto, @User() user: UserJwtPayload) {
    return this.purchaseService.create(dto, user);
  }

  @Get()
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.purchaseService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePurchaseDto: UpdatePurchaseDto,
  // ) {
  //   return this.purchaseService.update(+id, updatePurchaseDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.purchaseService.remove(+id);
  // }
}
