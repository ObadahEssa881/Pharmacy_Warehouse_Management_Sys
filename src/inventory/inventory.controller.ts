import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto, UpdateInventoryDto } from './dto';
import { JwtGuard, RoleGuard } from 'src/auth/guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { User } from 'src/auth/decorators/get-user.decorator';
import { UserJwtPayload } from 'src/auth/types';

@UseGuards(JwtGuard, RoleGuard)
@Controller('inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Get()
  findAll(
    @User() user: UserJwtPayload,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    return this.service.findAll(user, pageNum, limitNum);
  }

  @Get('expiring-soon')
  findExpiringSoon(@User() user: UserJwtPayload) {
    return this.service.findExpiringSoon(user);
  }

  @Get('low-stock')
  findLowStock(@User() user: UserJwtPayload) {
    return this.service.findLowStock(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @User() user: UserJwtPayload) {
    return this.service.findOne(+id, user);
  }

  @Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN')
  @Post('create')
  create(@Body() dto: CreateInventoryDto, @User() user: UserJwtPayload) {
    return this.service.create(dto, user);
  }

  @Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateInventoryDto,
    @User() user: UserJwtPayload,
  ) {
    return this.service.update(+id, dto, user);
  }

  @Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string, @User() user: UserJwtPayload) {
    return this.service.remove(+id, user);
  }
}
