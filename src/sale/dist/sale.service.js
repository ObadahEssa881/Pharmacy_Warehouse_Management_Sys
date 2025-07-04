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
exports.SaleService = void 0;
var common_1 = require("@nestjs/common");
var pagination_1 = require("../common/pagination");
var SaleService = /** @class */ (function () {
    function SaleService(prisma) {
        this.prisma = prisma;
    }
    SaleService.prototype.pharmacyScope = function (user) {
        if (!user.pharmacy_id)
            throw new common_1.ForbiddenException('Must be a pharmacy');
        return { pharmacy_id: user.pharmacy_id };
    };
    SaleService.prototype.create = function (user, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.$transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                        var sale, _i, _a, it;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, tx.sale.create({
                                        data: __assign(__assign({}, this.pharmacyScope(user)), { customer_name: dto.customer_name, total_amount: dto.items
                                                .reduce(function (sum, it) { return sum + Number(it.unit_price) * it.quantity; }, 0)
                                                .toString(), payment_mode: dto.payment_mode })
                                    })];
                                case 1:
                                    sale = _b.sent();
                                    return [4 /*yield*/, tx.saleItem.createMany({
                                            data: dto.items.map(function (it) { return ({
                                                sale_id: sale.id,
                                                medicine_id: it.medicine_id,
                                                quantity: it.quantity,
                                                unit_price: it.unit_price
                                            }); })
                                        })];
                                case 2:
                                    _b.sent();
                                    _i = 0, _a = dto.items;
                                    _b.label = 3;
                                case 3:
                                    if (!(_i < _a.length)) return [3 /*break*/, 6];
                                    it = _a[_i];
                                    return [4 /*yield*/, tx.inventory.updateMany({
                                            where: {
                                                medicine_id: it.medicine_id,
                                                pharmacy_id: user.pharmacy_id
                                            },
                                            data: { quantity: { decrement: it.quantity } }
                                        })];
                                case 4:
                                    _b.sent();
                                    _b.label = 5;
                                case 5:
                                    _i++;
                                    return [3 /*break*/, 3];
                                case 6: return [2 /*return*/, sale];
                            }
                        });
                    }); })];
            });
        });
    };
    SaleService.prototype.paginate = function (user, q) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.sale.findMany(__assign({ where: this.pharmacyScope(user), include: { SaleItems: true }, orderBy: { sale_date: 'desc' } }, pagination_1.buildPagination(q)))];
            });
        });
    };
    SaleService = __decorate([
        common_1.Injectable()
    ], SaleService);
    return SaleService;
}());
exports.SaleService = SaleService;
