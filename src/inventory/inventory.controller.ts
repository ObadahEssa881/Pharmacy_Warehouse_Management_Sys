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
import { User } from 'src/auth/decorators/get-user.decorator'; // <-- Import user decorator
import { UserJwtPayload } from 'src/auth/types'; // <-- Assuming your JWT payload type
import { PaginationDto } from 'src/common/pagination';

@UseGuards(JwtGuard, RoleGuard)
@Controller('inventory')
export class InventoryController {
  constructor(private readonly service: InventoryService) {}

  @Get()
  findAll(@User() user: UserJwtPayload, @Query() q: PaginationDto) {
    return this.service.findAll(user, q);
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
