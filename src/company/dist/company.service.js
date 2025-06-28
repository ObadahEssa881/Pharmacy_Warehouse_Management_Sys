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
exports.CompanyService = void 0;
var common_1 = require("@nestjs/common");
var CompanyService = /** @class */ (function () {
    function CompanyService(prisma) {
        this.prisma = prisma;
    }
    CompanyService.prototype.create = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var created, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.prisma.company.create({ data: dto })];
                    case 1:
                        created = _a.sent();
                        return [2 /*return*/, {
                                message: 'Company created successfully',
                                data: created
                            }];
                    case 2:
                        error_1 = _a.sent();
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        throw new common_1.BadRequestException('Error creating company: ' + error_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompanyService.prototype.findAll = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        return __awaiter(this, void 0, void 0, function () {
            var skip, _a, companies, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        skip = (page - 1) * limit;
                        return [4 /*yield*/, Promise.all([
                                this.prisma.company.findMany({
                                    skip: skip,
                                    take: limit,
                                    orderBy: { id: 'asc' }
                                }),
                                this.prisma.company.count(),
                            ])];
                    case 1:
                        _a = _b.sent(), companies = _a[0], total = _a[1];
                        return [2 /*return*/, {
                                message: 'Companies fetched successfully',
                                data: companies,
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
    CompanyService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var company;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.company.findUnique({ where: { id: id } })];
                    case 1:
                        company = _a.sent();
                        if (!company)
                            throw new common_1.NotFoundException("Company with id " + id + " not found");
                        return [2 /*return*/, {
                                message: 'Company fetched successfully',
                                data: company
                            }];
                }
            });
        });
    };
    CompanyService.prototype.update = function (id, dto) {
        return __awaiter(this, void 0, void 0, function () {
            var existing, updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.company.findUnique({ where: { id: id } })];
                    case 1:
                        existing = _a.sent();
                        if (!existing)
                            throw new common_1.NotFoundException("Company with id " + id + " not found");
                        return [4 /*yield*/, this.prisma.company.update({
                                where: { id: id },
                                data: dto
                            })];
                    case 2:
                        updated = _a.sent();
                        return [2 /*return*/, {
                                message: 'Company updated successfully',
                                data: updated
                            }];
                }
            });
        });
    };
    CompanyService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var existing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.company.findUnique({ where: { id: id } })];
                    case 1:
                        existing = _a.sent();
                        if (!existing)
                            throw new common_1.NotFoundException("Company with id " + id + " not found");
                        return [4 /*yield*/, this.prisma.company["delete"]({ where: { id: id } })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                message: "Company with id " + id + " deleted successfully"
                            }];
                }
            });
        });
    };
    CompanyService = __decorate([
        common_1.Injectable()
    ], CompanyService);
    return CompanyService;
}());
exports.CompanyService = CompanyService;
