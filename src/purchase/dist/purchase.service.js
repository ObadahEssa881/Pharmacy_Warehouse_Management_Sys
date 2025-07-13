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
            throw new common_1.ForbiddenException('Must be associated with a pharmacy');
        return { pharmacy_id: user.pharmacy_id };
    };
    /** CREATE purchase + items + invoice in one transaction */
    PurchaseService.prototype.create = function (user, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var totalAmount, i, item, quantity, unitPrice;
            var _this = this;
            return __generator(this, function (_a) {
                if (!dto.items || dto.items.length === 0) {
                    throw new common_1.BadRequestException('Purchase must include at least one item');
                }
                totalAmount = 0;
                for (i = 0; i < dto.items.length; i++) {
                    item = dto.items[i];
                    if (!item.medicine_id || item.medicine_id <= 0) {
                        throw new common_1.BadRequestException("Item at index " + i + " has invalid medicine_id");
                    }
                    quantity = Number(item.quantity);
                    if (isNaN(quantity) || quantity <= 0) {
                        throw new common_1.BadRequestException("Item at index " + i + " has invalid quantity");
                    }
                    unitPrice = Number(item.unit_price);
                    if (isNaN(unitPrice) || unitPrice <= 0) {
                        throw new common_1.BadRequestException("Item at index " + i + " has invalid unit_price");
                    }
                    totalAmount += quantity * unitPrice;
                }
                return [2 /*return*/, this.prisma.$transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                        var order;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, tx.purchaseOrder.create({
                                        data: __assign({ supplier_id: dto.supplier_id, status: purchase_status_enum_1.PurchaseStatus.PENDING }, this.pharmacyScope(user))
                                    })];
                                case 1:
                                    order = _a.sent();
                                    // Step 2: Create purchase order items
                                    return [4 /*yield*/, tx.purchaseOrderItem.createMany({
                                            data: dto.items.map(function (it) { return ({
                                                order_id: order.id,
                                                medicine_id: it.medicine_id,
                                                quantity: it.quantity,
                                                unit_price: it.unit_price
                                            }); })
                                        })];
                                case 2:
                                    // Step 2: Create purchase order items
                                    _a.sent();
                                    // Step 3: Create invoice
                                    return [4 /*yield*/, tx.invoice.create({
                                            data: {
                                                order_id: order.id,
                                                supplier_id: dto.supplier_id,
                                                total_amount: totalAmount,
                                                payment_status: 'UNPAID'
                                            }
                                        })];
                                case 3:
                                    // Step 3: Create invoice
                                    _a.sent();
                                    return [2 /*return*/, order];
                            }
                        });
                    }); })];
            });
        });
    };
    PurchaseService.prototype.paginate = function (user, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, skip, take, _b, orders, total;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = index_1.buildPagination(page, limit), skip = _a.skip, take = _a.take;
                        return [4 /*yield*/, this.prisma.$transaction([
                                this.prisma.purchaseOrder.findMany({
                                    where: this.pharmacyScope(user),
                                    include: { PurchaseOrderItems: true, Invoice: true },
                                    orderBy: { order_date: 'desc' },
                                    skip: skip,
                                    take: take
                                }),
                                this.prisma.purchaseOrder.count({ where: this.pharmacyScope(user) }),
                            ])];
                    case 1:
                        _b = _c.sent(), orders = _b[0], total = _b[1];
                        return [2 /*return*/, {
                                orders: orders,
                                meta: {
                                    total: total,
                                    page: page,
                                    limit: limit,
                                    pages: Math.ceil(total / limit)
                                }
                            }];
                }
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
                            throw new common_1.NotFoundException('Purchase order not found');
                        if (order.pharmacy_id !== user.pharmacy_id)
                            throw new common_1.ForbiddenException('Not authorized for this pharmacy');
                        if (order.status !== purchase_status_enum_1.PurchaseStatus.PENDING)
                            throw new common_1.BadRequestException('Order already processed');
                        return [2 /*return*/, this.prisma.$transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                                var _i, _a, item, warehouseInventory, pharmacyInventory;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!(dto.status === purchase_status_enum_1.PurchaseStatus.APPROVED)) return [3 /*break*/, 9];
                                            _i = 0, _a = order.PurchaseOrderItems;
                                            _b.label = 1;
                                        case 1:
                                            if (!(_i < _a.length)) return [3 /*break*/, 9];
                                            item = _a[_i];
                                            return [4 /*yield*/, tx.inventory.findFirst({
                                                    where: {
                                                        medicine_id: item.medicine_id,
                                                        warehouse_id: user.warehouse_id
                                                    }
                                                })];
                                        case 2:
                                            warehouseInventory = _b.sent();
                                            if (!warehouseInventory ||
                                                warehouseInventory.quantity < item.quantity) {
                                                throw new common_1.BadRequestException("Not enough stock in warehouse for medicine ID " + item.medicine_id);
                                            }
                                            // 2. Deduct from warehouse
                                            return [4 /*yield*/, tx.inventory.update({
                                                    where: { id: warehouseInventory.id },
                                                    data: { quantity: { decrement: item.quantity } }
                                                })];
                                        case 3:
                                            // 2. Deduct from warehouse
                                            _b.sent();
                                            return [4 /*yield*/, tx.inventory.findFirst({
                                                    where: {
                                                        medicine_id: item.medicine_id,
                                                        pharmacy_id: user.pharmacy_id
                                                    }
                                                })];
                                        case 4:
                                            pharmacyInventory = _b.sent();
                                            if (!pharmacyInventory) return [3 /*break*/, 6];
                                            // Increment existing inventory
                                            return [4 /*yield*/, tx.inventory.update({
                                                    where: { id: pharmacyInventory.id },
                                                    data: {
                                                        quantity: { increment: item.quantity },
                                                        cost_price: item.unit_price,
                                                        last_updated: new Date()
                                                    }
                                                })];
                                        case 5:
                                            // Increment existing inventory
                                            _b.sent();
                                            return [3 /*break*/, 8];
                                        case 6: 
                                        // Create new inventory entry
                                        return [4 /*yield*/, tx.inventory.create({
                                                data: {
                                                    medicine_id: item.medicine_id,
                                                    pharmacy_id: user.pharmacy_id,
                                                    location_type: 'PHARMACY',
                                                    quantity: item.quantity,
                                                    cost_price: item.unit_price,
                                                    selling_price: Number(item.unit_price) * 1.2,
                                                    expiry_date: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                                                }
                                            })];
                                        case 7:
                                            // Create new inventory entry
                                            _b.sent();
                                            _b.label = 8;
                                        case 8:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 9: 
                                        // Update order status
                                        return [2 /*return*/, tx.purchaseOrder.update({
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
