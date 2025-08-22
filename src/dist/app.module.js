"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
// import { PrismaService } from './prisma/prisma.service';
var config_1 = require("@nestjs/config");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var auth_module_1 = require("./auth/auth.module");
var prisma_module_1 = require("./prisma/prisma.module");
var supplier_module_1 = require("./supplier/supplier.module");
var purchase_module_1 = require("./purchase/purchase.module");
var sale_module_1 = require("./sale/sale.module");
var medicine_module_1 = require("./medicine/medicine.module");
var invoice_module_1 = require("./invoice/invoice.module");
var company_module_1 = require("./company/company.module");
var inventory_module_1 = require("./inventory/inventory.module");
var report_module_1 = require("./report/report.module");
var notification_module_1 = require("./notification/notification.module");
var user_module_1 = require("./user/user.module");
var warehouse_module_1 = require("./warehouse/warehouse.module");
var schedule_1 = require("@nestjs/schedule"); // ✅ missing
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot({ isGlobal: true }),
                schedule_1.ScheduleModule.forRoot(),
                auth_module_1.AuthModule,
                prisma_module_1.PrismaModule,
                supplier_module_1.SupplierModule,
                purchase_module_1.PurchaseModule,
                sale_module_1.SaleModule,
                medicine_module_1.MedicineModule,
                invoice_module_1.InvoiceModule,
                company_module_1.CompanyModule,
                inventory_module_1.InventoryModule,
                report_module_1.ReportModule,
                notification_module_1.NotificationsModule,
                user_module_1.UserModule,
                warehouse_module_1.WarehouseModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
