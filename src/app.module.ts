import { Module } from '@nestjs/common';
// import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { SupplierModule } from './supplier/supplier.module';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
import { MedicineModule } from './medicine/medicine.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CompanyModule } from './company/company.module';
import { InventoryModule } from './inventory/inventory.module';
import { ReportModule } from './report/report.module';
import { NotificationsModule } from './notification/notification.module';
import { UserModule } from './user/user.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ScheduleModule } from '@nestjs/schedule'; // ✅ missing

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(), // <-- once at root
    AuthModule,
    PrismaModule,
    SupplierModule,
    PurchaseModule,
    SaleModule,
    MedicineModule,
    InvoiceModule,
    CompanyModule,
    InventoryModule,
    ReportModule,
    NotificationsModule,
    UserModule,
    WarehouseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
