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
exports.MedicineService = void 0;
var common_1 = require("@nestjs/common");
var MedicineService = /** @class */ (function () {
    function MedicineService(prisma) {
        this.prisma = prisma;
    }
    MedicineService.prototype.create = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var medicine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.medicine.create({ data: dto })];
                    case 1:
                        medicine = _a.sent();
                        return [2 /*return*/, { message: 'Medicine created successfully', data: medicine }];
                }
            });
        });
    };
    MedicineService.prototype.findAll = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.prisma.$transaction([
                            this.prisma.medicine.findMany({
                                skip: (page - 1) * limit,
                                take: limit,
                                include: { category: true, company: true, supplier: true }
                            }),
                            this.prisma.medicine.count(),
                        ])];
                    case 1:
                        _a = _b.sent(), data = _a[0], total = _a[1];
                        return [2 /*return*/, {
                                message: 'Medicines retrieved successfully',
                                data: data,
                                meta: { total: total, page: page, limit: limit }
                            }];
                }
            });
        });
    };
    MedicineService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var medicine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.medicine.findUnique({ where: { id: id } })];
                    case 1:
                        medicine = _a.sent();
                        if (!medicine)
                            throw new common_1.NotFoundException('Medicine not found');
                        return [2 /*return*/, { message: 'Medicine retrieved successfully', data: medicine }];
                }
            });
        });
    };
    MedicineService.prototype.update = function (id, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.medicine.update({
                            where: { id: id },
                            data: dto
                        })];
                    case 1:
                        updated = _a.sent();
                        return [2 /*return*/, { message: 'Medicine updated successfully', data: updated }];
                }
            });
        });
    };
    MedicineService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.medicine["delete"]({ where: { id: id } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { message: 'Medicine deleted successfully' }];
                }
            });
        });
    };
    MedicineService = __decorate([
        common_1.Injectable()
    ], MedicineService);
    return MedicineService;
}());
exports.MedicineService = MedicineService;
