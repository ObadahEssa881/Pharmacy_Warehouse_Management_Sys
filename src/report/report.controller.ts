// src/reports/reports.controller.ts
import { Controller, Get, Query, Res, Req, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { Response } from 'express';
import { JwtGuard } from '../auth/guard/jwt.guard'; // Adjust the path
import { UserJwtPayload } from '../auth/types/user.types';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RoleGuard } from 'src/auth/guard';

@Controller('reports')
@UseGuards(JwtGuard, RoleGuard)
@Roles('PHARMACY_OWNER')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('financial')
  async getFinancialReport(
    @Req() req: { user: UserJwtPayload },
    @Query('start') start: string,
    @Query('end') end: string,
  ) {
    const pharmacyId = req.user.pharmacy_id;
    return await this.reportService.getFinancialReport(
      new Date(start),
      new Date(end),
      pharmacyId,
    );
  }

  @Get('financial/export')
  async exportFinancialReport(
    @Req() req: { user: UserJwtPayload },
    @Query('start') start: string,
    @Query('end') end: string,
    @Res() res: Response,
  ) {
    const pharmacyId = req.user.pharmacy_id;
    const buffer = await this.reportService.exportFinancialReport(
      new Date(start),
      new Date(end),
      pharmacyId,
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=financial_report.xlsx',
    );
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(buffer);
  }
}
