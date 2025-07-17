// src/reports/reports.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as ExcelJS from 'exceljs';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  async getFinancialReport(start: Date, end: Date, pharmacyId: number) {
    const sales = await this.prisma.sale.findMany({
      where: { pharmacy_id: pharmacyId, sale_date: { gte: start, lte: end } },
      include: { SaleItems: true },
    });

    const totalSales = sales.reduce(
      (sum, s) => sum + Number(s.total_amount),
      0,
    );

    const grossProfit = sales.reduce((sum, s) => {
      return (
        sum +
        s.SaleItems.reduce(
          (itemSum, item) =>
            itemSum +
            (Number(item.unit_price) - Number(item.cost_price)) * item.quantity,
          0,
        )
      );
    }, 0);

    const purchaseOrders = await this.prisma.purchaseOrder.findMany({
      where: { pharmacy_id: pharmacyId, order_date: { gte: start, lte: end } },
      include: { PurchaseOrderItems: true },
    });

    const totalPurchaseCost = purchaseOrders.reduce((sum, po) => {
      return (
        sum +
        po.PurchaseOrderItems.reduce(
          (poSum, i) => poSum + Number(i.unit_price) * i.quantity,
          0,
        )
      );
    }, 0);

    const inventory = await this.prisma.inventory.findMany({
      where: { pharmacy_id: pharmacyId },
    });

    const currentStockCost = inventory.reduce(
      (sum, i) => sum + Number(i.quantity) * Number(i.cost_price),
      0,
    );

    const grossMargin = totalSales
      ? ((grossProfit / totalSales) * 100).toFixed(2)
      : '0';

    return {
      period: { start, end },
      totalSales,
      totalPurchaseCost,
      grossProfit,
      grossMargin,
      currentStockCost,
      capitalEstimate: currentStockCost + totalSales - totalPurchaseCost,
    };
  }

  async exportFinancialReport(start: Date, end: Date, pharmacyId: number) {
    const data = await this.getFinancialReport(start, end, pharmacyId);
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Financial Report');

    sheet.addRow(['Metric', 'Value']);
    Object.entries(data).forEach(([key, value]) => {
      sheet.addRow([
        key,
        typeof value === 'object' ? JSON.stringify(value) : value,
      ]);
    });

    return workbook.xlsx.writeBuffer();
  }
}
