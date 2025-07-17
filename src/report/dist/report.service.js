"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ReportService = void 0;
// src/reports/reports.service.ts
var common_1 = require("@nestjs/common");
var ExcelJS = require("exceljs");
var ReportService = /** @class */ (function () {
    function ReportService(prisma) {
        this.prisma = prisma;
    }
    ReportService.prototype.getFinancialReport = function (start, end, pharmacyId) {
        return __awaiter(this, void 0, void 0, function () {
            var sales, totalSales, grossProfit, purchaseOrders, totalPurchaseCost, inventory, currentStockCost, grossMargin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.sale.findMany({
                            where: { pharmacy_id: pharmacyId, sale_date: { gte: start, lte: end } },
                            include: { SaleItems: true }
                        })];
                    case 1:
                        sales = _a.sent();
                        totalSales = sales.reduce(function (sum, s) { return sum + Number(s.total_amount); }, 0);
                        grossProfit = sales.reduce(function (sum, s) {
                            return (sum +
                                s.SaleItems.reduce(function (itemSum, item) {
                                    return itemSum +
                                        (Number(item.unit_price) - Number(item.cost_price)) * item.quantity;
                                }, 0));
                        }, 0);
                        return [4 /*yield*/, this.prisma.purchaseOrder.findMany({
                                where: { pharmacy_id: pharmacyId, order_date: { gte: start, lte: end } },
                                include: { PurchaseOrderItems: true }
                            })];
                    case 2:
                        purchaseOrders = _a.sent();
                        totalPurchaseCost = purchaseOrders.reduce(function (sum, po) {
                            return (sum +
                                po.PurchaseOrderItems.reduce(function (poSum, i) { return poSum + Number(i.unit_price) * i.quantity; }, 0));
                        }, 0);
                        return [4 /*yield*/, this.prisma.inventory.findMany({
                                where: { pharmacy_id: pharmacyId }
                            })];
                    case 3:
                        inventory = _a.sent();
                        currentStockCost = inventory.reduce(function (sum, i) { return sum + Number(i.quantity) * Number(i.cost_price); }, 0);
                        grossMargin = totalSales
                            ? ((grossProfit / totalSales) * 100).toFixed(2)
                            : '0';
                        return [2 /*return*/, {
                                period: { start: start, end: end },
                                totalSales: totalSales,
                                totalPurchaseCost: totalPurchaseCost,
                                grossProfit: grossProfit,
                                grossMargin: grossMargin,
                                currentStockCost: currentStockCost,
                                capitalEstimate: currentStockCost + totalSales - totalPurchaseCost
                            }];
                }
            });
        });
    };
    ReportService.prototype.exportFinancialReport = function (start, end, pharmacyId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, workbook, sheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFinancialReport(start, end, pharmacyId)];
                    case 1:
                        data = _a.sent();
                        workbook = new ExcelJS.Workbook();
                        sheet = workbook.addWorksheet('Financial Report');
                        sheet.addRow(['Metric', 'Value']);
                        Object.entries(data).forEach(function (_a) {
                            var key = _a[0], value = _a[1];
                            sheet.addRow([
                                key,
                                typeof value === 'object' ? JSON.stringify(value) : value,
                            ]);
                        });
                        return [2 /*return*/, workbook.xlsx.writeBuffer()];
                }
            });
        });
    };
    ReportService = __decorate([
        common_1.Injectable()
    ], ReportService);
    return ReportService;
}());
exports.ReportService = ReportService;
