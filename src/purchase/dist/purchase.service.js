"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.PurchaseService = void 0;
var common_1 = require("@nestjs/common");
var index_1 = require("../common/pagination/index");
var purchase_status_enum_1 = require("../common/enums/purchase\u2011status.enum");
var PurchaseService = /** @class */ (function () {
    function PurchaseService(prisma) {
        this.prisma = prisma;
    }
    PurchaseService.prototype.pharmacyScope = function (user) {
        if (!user.pharmacy_id)
            throw new common_1.ForbiddenException('Must be a pharmacy account');
        return { pharmacy_id: user.pharmacy_id };
    };
    /** CREATE purchase + items + invoice in one transaction */
    PurchaseService.prototype.create = function (user, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.$transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                        var order;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tx.purchaseOrder.create({
                                        data: __assign({ supplier_id: dto.supplier_id, status: purchase_status_enum_1.PurchaseStatus.PENDING }, this.pharmacyScope(user))
                                    })];
                                case 1:
                                    order = _a.sent();
                                    return [4 /*yield*/, tx.purchaseOrderItem.createMany({
                                            data: dto.items.map(function (it) { return ({
                                                order_id: order.id,
                                                medicine_id: it.medicine_id,
                                                quantity: it.quantity,
                                                unit_price: it.unit_price
                                            }); })
                                        })];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, tx.invoice.create({
                                            data: {
                                                order_id: order.id,
                                                supplier_id: dto.supplier_id,
                                                total_amount: dto.items
                                                    .reduce(function (sum, it) { return sum + Number(it.unit_price) * it.quantity; }, 0)
                                                    .toString(),
                                                payment_status: 'UNPAID'
                                            }
                                        })];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/, order];
                            }
                        });
                    }); })];
            });
        });
    };
    PurchaseService.prototype.paginate = function (user, q) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.purchaseOrder.findMany(__assign({ where: this.pharmacyScope(user), include: { PurchaseOrderItems: true, Invoice: true }, orderBy: { order_date: 'desc' } }, index_1.buildPagination(q)))];
            });
        });
    };
    /** Approve / Reject & move stock */
    PurchaseService.prototype.updateStatus = function (user, id, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var order;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.purchaseOrder.findUnique({
                            where: { id: id },
                            include: { PurchaseOrderItems: true }
                        })];
                    case 1:
                        order = _a.sent();
                        if (!order)
                            throw new common_1.NotFoundException();
                        if (order.pharmacy_id !== user.pharmacy_id)
                            throw new common_1.ForbiddenException();
                        if (order.status !== purchase_status_enum_1.PurchaseStatus.PENDING)
                            throw new common_1.BadRequestException('Order already processed');
                        return [2 /*return*/, this.prisma.$transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                                var _i, _a, item, inv;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(dto.status === purchase_status_enum_1.PurchaseStatus.APPROVED)) return [3 /*break*/, 8];
                                            _i = 0, _a = order.PurchaseOrderItems;
                                            _b.label = 1;
                                        case 1:
                                            if (!(_i < _a.length)) return [3 /*break*/, 8];
                                            item = _a[_i];
                                            // 1. decrement warehouse
                                            return [4 /*yield*/, tx.inventory.updateMany({
                                                    where: {
                                                        medicine_id: item.medicine_id,
                                                        warehouse_id: user.warehouse_id
                                                    },
                                                    data: { quantity: { decrement: item.quantity } }
                                                })];
                                        case 2:
                                            // 1. decrement warehouse
                                            _b.sent();
                                            return [4 /*yield*/, tx.inventory.findFirst({
                                                    where: {
                                                        medicine_id: item.medicine_id,
                                                        pharmacy_id: user.pharmacy_id
                                                    }
                                                })];
                                        case 3:
                                            inv = _b.sent();
                                            if (!inv) return [3 /*break*/, 5];
                                            return [4 /*yield*/, tx.inventory.update({
                                                    where: { id: inv.id },
                                                    data: { quantity: { increment: item.quantity } }
                                                })];
                                        case 4:
                                            _b.sent();
                                            return [3 /*break*/, 7];
                                        case 5: return [4 /*yield*/, tx.inventory.create({
                                                data: {
                                                    medicine_id: item.medicine_id,
                                                    pharmacy_id: user.pharmacy_id,
                                                    location_type: 'PHARMACY',
                                                    quantity: item.quantity,
                                                    cost_price: item.unit_price,
                                                    selling_price: item.unit_price,
                                                    expiry_date: new Date()
                                                }
                                            })];
                                        case 6:
                                            _b.sent();
                                            _b.label = 7;
                                        case 7:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 8: return [2 /*return*/, tx.purchaseOrder.update({
                                                where: { id: id },
                                                data: { status: dto.status },
                                                include: { PurchaseOrderItems: true, Invoice: true }
                                            })];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    PurchaseService = __decorate([
        common_1.Injectable()
    ], PurchaseService);
    return PurchaseService;
}());
exports.PurchaseService = PurchaseService;
