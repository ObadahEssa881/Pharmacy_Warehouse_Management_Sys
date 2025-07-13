import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { JwtGuard, RoleGuard } from 'src/auth/guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('companies')
@UseGuards(JwtGuard, RoleGuard)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN')
  @Post('create')
  create(@Body() dto: CreateCompanyDto) {
    return this.companyService.create(dto);
  }

  @Get('all')
  findAll(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ) {
    return this.companyService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.companyService.findOne(id);
  }

  @Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN')
  @Put('update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCompanyDto) {
    return this.companyService.update(id, dto);
  }

  @Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN')
  @Delete('delete/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.companyService.remove(id);
  }
  @Get(':id/medicines')
  getMedicinesByCompany(
    @Param('id') companyId: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.companyService.getMedicinesByCompany(+companyId, page, limit);
  }
}
