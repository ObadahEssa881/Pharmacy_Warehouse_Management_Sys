"use strict";
// sale.service.ts
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
exports.SaleService = void 0;
var common_1 = require("@nestjs/common");
var SaleService = /** @class */ (function () {
    function SaleService(prisma) {
        this.prisma = prisma;
    }
    SaleService.prototype.create = function (user, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var pharmacyId, totalAmount, i, item, quantity, unitPrice;
            var _this = this;
            return __generator(this, function (_a) {
                pharmacyId = user.pharmacy_id;
                if (!dto.items || dto.items.length === 0) {
                    throw new common_1.BadRequestException('Sale must include at least one item');
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
                    console.log(item);
                    if (isNaN(unitPrice) || unitPrice <= 0) {
                        throw new common_1.BadRequestException("Item at index " + i + " has invalid unit_price");
                    }
                    totalAmount += quantity * unitPrice;
                }
                return [2 /*return*/, this.prisma.$transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                        var sale, _i, _a, item, inventory;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, tx.sale.create({
                                        data: {
                                            pharmacy: { connect: { id: user.pharmacy_id } },
                                            customer_name: dto.customer_name,
                                            payment_mode: dto.payment_mode,
                                            total_amount: totalAmount
                                        }
                                    })];
                                case 1:
                                    sale = _b.sent();
                                    // Step 2: Create sale items
                                    return [4 /*yield*/, tx.saleItem.createMany({
                                            data: dto.items.map(function (it) { return ({
                                                sale_id: sale.id,
                                                medicine_id: it.medicine_id,
                                                quantity: it.quantity,
                                                unit_price: it.unit_price,
                                                cost_price: it.cost_price
                                            }); })
                                        })];
                                case 2:
                                    // Step 2: Create sale items
                                    _b.sent();
                                    _i = 0, _a = dto.items;
                                    _b.label = 3;
                                case 3:
                                    if (!(_i < _a.length)) return [3 /*break*/, 7];
                                    item = _a[_i];
                                    return [4 /*yield*/, tx.inventory.findFirst({
                                            where: {
                                                medicine_id: item.medicine_id,
                                                pharmacy_id: pharmacyId
                                            }
                                        })];
                                case 4:
                                    inventory = _b.sent();
                                    if (!inventory) {
                                        throw new common_1.ForbiddenException("Medicine ID " + item.medicine_id + " not found in your inventory");
                                    }
                                    if (inventory.quantity < item.quantity) {
                                        throw new common_1.ForbiddenException("Not enough stock for medicine ID " + item.medicine_id + ". Available: " + inventory.quantity + ", Requested: " + item.quantity);
                                    }
                                    return [4 /*yield*/, tx.inventory.update({
                                            where: { id: inventory.id },
                                            data: { quantity: { decrement: item.quantity } }
                                        })];
                                case 5:
                                    _b.sent();
                                    _b.label = 6;
                                case 6:
                                    _i++;
                                    return [3 /*break*/, 3];
                                case 7: return [2 /*return*/, sale];
                            }
                        });
                    }); })];
            });
        });
    };
    SaleService.prototype.paginate = function (user, page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        return __awaiter(this, void 0, void 0, function () {
            var skip, _a, sales, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        skip = (page - 1) * limit;
                        return [4 /*yield*/, this.prisma.$transaction([
                                this.prisma.sale.findMany({
                                    where: { pharmacy_id: user.pharmacy_id },
                                    include: { SaleItems: true },
                                    orderBy: { sale_date: 'desc' },
                                    skip: skip,
                                    take: limit
                                }),
                                this.prisma.sale.count({ where: { pharmacy_id: user.pharmacy_id } }),
                            ])];
                    case 1:
                        _a = _b.sent(), sales = _a[0], total = _a[1];
                        return [2 /*return*/, {
                                sales: sales,
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
    SaleService = __decorate([
        common_1.Injectable()
    ], SaleService);
    return SaleService;
}());
exports.SaleService = SaleService;
