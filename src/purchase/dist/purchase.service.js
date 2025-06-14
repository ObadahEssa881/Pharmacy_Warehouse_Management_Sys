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
exports.PurchaseService = void 0;
var common_1 = require("@nestjs/common");
var library_1 = require("@prisma/client/runtime/library");
// import { UpdatePurchaseDto } from './dto/update-purchase.dto';
var PurchaseService = /** @class */ (function () {
    function PurchaseService(prisma) {
        this.prisma = prisma;
    }
    PurchaseService.prototype.create = function (dto, user) {
        return __awaiter(this, void 0, void 0, function () {
            var purchaseOrder, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.prisma.$transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                                var order, orderItemsData;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tx.purchaseOrder.create({
                                                data: {
                                                    pharmacy_id: user.pharmacy_id,
                                                    supplier_id: dto.supplier_id,
                                                    status: 'PENDING',
                                                    order_date: new Date(),
                                                    delivery_date: dto.deliveryDate
                                                }
                                            })];
                                        case 1:
                                            order = _a.sent();
                                            // Step 2: Create purchase order items
                                            console.log(dto.items);
                                            orderItemsData = dto.items.map(function (item) { return ({
                                                order_id: order.id,
                                                medicine_id: item.medicine_id,
                                                quantity: item.quantity,
                                                unit_price: item.unit_price
                                            }); });
                                            console.log(orderItemsData);
                                            return [4 /*yield*/, tx.purchaseOrderItem.createMany({
                                                    data: orderItemsData
                                                })];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/, order];
                                    }
                                });
                            }); })];
                    case 1:
                        purchaseOrder = _a.sent();
                        return [2 /*return*/, purchaseOrder];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof library_1.PrismaClientKnownRequestError) {
                            throw new common_1.ForbiddenException(error_1);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var purchase;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.purchaseOrder.findMany()];
                    case 1:
                        purchase = _a.sent();
                        if (!purchase) {
                            return [2 /*return*/, 'there is no purchases to show'];
                        }
                        return [2 /*return*/, purchase];
                }
            });
        });
    };
    PurchaseService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var purchase;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.purchaseOrder.findUnique({
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        purchase = _a.sent();
                        if (!purchase) {
                            return [2 /*return*/, 'not found please verify credintials'];
                        }
                        return [2 /*return*/, purchase];
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
