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
exports.InventoryService = void 0;
var common_1 = require("@nestjs/common");
var pagination_1 = require("src/common/query/pagination");
var query_builder_1 = require("src/common/query/query-builder");
var InventoryService = /** @class */ (function () {
    function InventoryService(prisma, notifications) {
        this.prisma = prisma;
        this.notifications = notifications;
    }
    // inventory.service.ts
    InventoryService.prototype.findAll = function (user, query) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var _g, skip, take, baseWhere, where, select, include, _h, inventories, total;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _g = pagination_1.buildPagination((_a = query.page) !== null && _a !== void 0 ? _a : 1, (_b = query.limit) !== null && _b !== void 0 ? _b : 20), skip = _g.skip, take = _g.take;
                        baseWhere = ['PHARMACIST', 'PHARMACY_OWNER'].includes(user.role)
                            ? { pharmacy_id: user.pharmacy_id }
                            : { warehouse_id: user.warehouse_id };
                        where = __assign(__assign(__assign({}, baseWhere), query_builder_1.buildSearchOrWhere(query.search, ['medicine'])), query_builder_1.buildWhereFromFilter((_c = query.filter) !== null && _c !== void 0 ? _c : {}));
                        select = query_builder_1.buildSelect(query.select);
                        include = query_builder_1.buildInclude(query.include);
                        return [4 /*yield*/, this.prisma.$transaction([
                                this.prisma.inventory.findMany(__assign(__assign({ skip: skip,
                                    take: take,
                                    where: where, orderBy: (_d = query_builder_1.buildOrderBy(query.sort)) !== null && _d !== void 0 ? _d : { id: 'asc' } }, (select ? { select: select } : {})), (include
                                    ? { include: __assign({ medicine: true }, include) }
                                    : { include: { medicine: true } }))),
                                this.prisma.inventory.count({ where: where }),
                            ])];
                    case 1:
                        _h = _j.sent(), inventories = _h[0], total = _h[1];
                        return [2 /*return*/, {
                                message: inventories.length
                                    ? 'Inventory fetched successfully'
                                    : 'No inventory found for this user.',
                                data: inventories,
                                meta: pagination_1.buildMeta(total, (_e = query.page) !== null && _e !== void 0 ? _e : 1, (_f = query.limit) !== null && _f !== void 0 ? _f : 20)
                            }];
                }
            });
        });
    };
    InventoryService.prototype.findOne = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var where, inventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        where = user.role === 'PHARMACIST' || user.role === 'PHARMACY_OWNER'
                            ? { id: id, pharmacy_id: user.pharmacy_id }
                            : { id: id, warehouse_id: user.warehouse_id };
                        return [4 /*yield*/, this.prisma.inventory.findFirst({
                                where: where,
                                include: { medicine: true }
                            })];
                    case 1:
                        inventory = _a.sent();
                        if (!inventory)
                            throw new common_1.NotFoundException('Inventory item not found.');
                        return [2 /*return*/, { message: 'Inventory item found.', data: inventory }];
                }
            });
        });
    };
    InventoryService.prototype.create = function (dto, user) {
        return __awaiter(this, void 0, void 0, function () {
            var pharmacy, inventory, warehouse, inventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(user);
                        if (!(user.role === 'PHARMACIST' || user.role === 'PHARMACY_OWNER')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.prisma.pharmacy.findUnique({
                                where: { id: user.pharmacy_id }
                            })];
                    case 1:
                        pharmacy = _a.sent();
                        if (!pharmacy)
                            throw new common_1.BadRequestException('Pharmacy not found');
                        return [4 /*yield*/, this.prisma.inventory.create({
                                data: {
                                    medicine_id: dto.medicine_id,
                                    pharmacy_id: user.pharmacy_id,
                                    location_type: 'PHARMACY',
                                    quantity: dto.quantity,
                                    cost_price: dto.cost_price,
                                    selling_price: dto.selling_price,
                                    expiry_date: dto.expiry_date
                                }
                            })];
                    case 2:
                        inventory = _a.sent();
                        return [2 /*return*/, { message: 'Inventory created for pharmacy', data: inventory }];
                    case 3:
                        if (!(user.role === 'SUPPLIER_ADMIN' || user.role === 'SUPPLIER_EMPLOYEE')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.prisma.warehouse.findUnique({
                                where: { id: user.warehouse_id }
                            })];
                    case 4:
                        warehouse = _a.sent();
                        if (!warehouse)
                            throw new common_1.BadRequestException('Warehouse not found');
                        return [4 /*yield*/, this.prisma.inventory.create({
                                data: {
                                    medicine_id: dto.medicine_id,
                                    warehouse_id: user.warehouse_id,
                                    location_type: 'WAREHOUSE',
                                    quantity: dto.quantity,
                                    cost_price: dto.cost_price,
                                    selling_price: dto.selling_price,
                                    expiry_date: dto.expiry_date
                                }
                            })];
                    case 5:
                        inventory = _a.sent();
                        return [2 /*return*/, { message: 'Inventory created for warehouse', data: inventory }];
                    case 6: throw new common_1.BadRequestException('Invalid user context');
                }
            });
        });
    };
    InventoryService.prototype.update = function (id, dto, user) {
        return __awaiter(this, void 0, void 0, function () {
            var where, existing, updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        where = user.role === 'PHARMACIST' || user.role === 'PHARMACY_OWNER'
                            ? { id: id, pharmacy_id: user.pharmacy_id }
                            : { id: id, warehouse_id: user.warehouse_id };
                        return [4 /*yield*/, this.prisma.inventory.findFirst({ where: where })];
                    case 1:
                        existing = _a.sent();
                        if (!existing)
                            throw new common_1.NotFoundException('Inventory item not found.');
                        return [4 /*yield*/, this.prisma.inventory.update({
                                where: { id: id },
                                data: __assign(__assign({}, dto), { last_updated: new Date() })
                            })];
                    case 2:
                        updated = _a.sent();
                        return [2 /*return*/, { message: 'Inventory item updated.', data: updated }];
                }
            });
        });
    };
    InventoryService.prototype.remove = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var where, existing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        where = user.role === 'PHARMACIST' || user.role === 'PHARMACY_OWNER'
                            ? { id: id, pharmacy_id: user.pharmacy_id }
                            : { id: id, warehouse_id: user.warehouse_id };
                        return [4 /*yield*/, this.prisma.inventory.findFirst({ where: where })];
                    case 1:
                        existing = _a.sent();
                        if (!existing)
                            throw new common_1.NotFoundException('Inventory item not found.');
                        return [4 /*yield*/, this.prisma.inventory["delete"]({ where: { id: id } })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { message: 'Inventory item deleted.' }];
                }
            });
        });
    };
    InventoryService.prototype.findExpiringSoon = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var threeMonthsFromNow, where, expiringItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        threeMonthsFromNow = new Date();
                        threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
                        where = ['PHARMACIST', 'PHARMACY_OWNER'].includes(user.role)
                            ? {
                                pharmacy_id: user.pharmacy_id,
                                expiry_date: {
                                    lte: threeMonthsFromNow
                                }
                            }
                            : {
                                warehouse_id: user.warehouse_id,
                                expiry_date: {
                                    lte: threeMonthsFromNow
                                }
                            };
                        return [4 /*yield*/, this.prisma.inventory.findMany({
                                where: where,
                                include: { medicine: true },
                                orderBy: { expiry_date: 'asc' }
                            })];
                    case 1:
                        expiringItems = _a.sent();
                        return [2 /*return*/, {
                                message: expiringItems.length
                                    ? 'Expiring inventory items found'
                                    : 'No expiring inventory items found',
                                data: expiringItems,
                                count: expiringItems.length
                            }];
                }
            });
        });
    };
    InventoryService.prototype.findLowStock = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var where, lowStockItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        where = ['PHARMACIST', 'PHARMACY_OWNER'].includes(user.role)
                            ? {
                                pharmacy_id: user.pharmacy_id,
                                quantity: {
                                    lt: 2
                                }
                            }
                            : {
                                warehouse_id: user.warehouse_id,
                                quantity: {
                                    lt: 2
                                }
                            };
                        return [4 /*yield*/, this.prisma.inventory.findMany({
                                where: where,
                                include: { medicine: true },
                                orderBy: { quantity: 'asc' }
                            })];
                    case 1:
                        lowStockItems = _a.sent();
                        return [2 /*return*/, {
                                message: lowStockItems.length
                                    ? 'Low stock inventory items found'
                                    : 'No low stock inventory items found',
                                data: lowStockItems,
                                count: lowStockItems.length
                            }];
                }
            });
        });
    };
    // src/inventory/inventory.service.ts
    InventoryService.prototype.checkInventoryAlerts = function (pharmacy_id) {
        return __awaiter(this, void 0, void 0, function () {
            var lowStockItems, nearExpiryItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.inventory.findMany({
                            where: { pharmacy_id: pharmacy_id, quantity: { lt: 5 } }
                        })];
                    case 1:
                        lowStockItems = _a.sent();
                        return [4 /*yield*/, this.prisma.inventory.findMany({
                                where: {
                                    pharmacy_id: pharmacy_id,
                                    expiry_date: {
                                        lte: new Date(new Date().setDate(new Date().getDate() + 7))
                                    }
                                }
                            })];
                    case 2:
                        nearExpiryItems = _a.sent();
                        if (!(lowStockItems.length || nearExpiryItems.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.notifications.sendPharmacyAlerts(pharmacy_id, lowStockItems.length, nearExpiryItems.length)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InventoryService = __decorate([
        common_1.Injectable()
    ], InventoryService);
    return InventoryService;
}());
exports.InventoryService = InventoryService;
