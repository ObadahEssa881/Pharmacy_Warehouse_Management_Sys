"use strict";
// warehouse.service.ts
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
exports.WarehouseService = void 0;
var common_1 = require("@nestjs/common");
var WarehouseService = /** @class */ (function () {
    function WarehouseService(prisma) {
        this.prisma = prisma;
    }
    WarehouseService.prototype.getAllWarehouses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.warehouse.findMany()];
            });
        });
    };
    WarehouseService.prototype.getWarehouseInventory = function (pharmacyId, targetWarehouseId) {
        return __awaiter(this, void 0, void 0, function () {
            var inventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.inventory.findMany({
                            where: {
                                warehouse_id: targetWarehouseId,
                                location_type: 'WAREHOUSE'
                            },
                            include: {
                                medicine: true
                            }
                        })];
                    case 1:
                        inventory = _a.sent();
                        if (!inventory.length) {
                            throw new common_1.NotFoundException('No inventory found for this warehouse');
                        }
                        return [2 /*return*/, inventory];
                }
            });
        });
    };
    WarehouseService.prototype.getWarehouseById = function (id, pharmacyId, warehouseId) {
        return __awaiter(this, void 0, void 0, function () {
            var warehouse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.warehouse.findUnique({
                            where: { id: Number(id) }
                        })];
                    case 1:
                        warehouse = _a.sent();
                        if (!warehouse)
                            throw new Error('Warehouse not found');
                        if (warehouse.owner_id !== pharmacyId && warehouse.id !== warehouseId) {
                            throw new Error('Unauthorized access to warehouse');
                        }
                        return [2 /*return*/, warehouse];
                }
            });
        });
    };
    WarehouseService.prototype.createWarehouse = function (dto, pharmacyId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.warehouse.create({
                        data: __assign(__assign({}, dto), { owner_id: pharmacyId })
                    })];
            });
        });
    };
    WarehouseService.prototype.updateWarehouse = function (id, dto, pharmacyId, warehouseId) {
        return __awaiter(this, void 0, void 0, function () {
            var warehouse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.warehouse.findUnique({
                            where: { id: Number(id) }
                        })];
                    case 1:
                        warehouse = _a.sent();
                        if (!warehouse)
                            throw new Error('Warehouse not found');
                        if (warehouse.owner_id !== pharmacyId && warehouse.id !== warehouseId) {
                            throw new Error('Unauthorized access to update warehouse');
                        }
                        return [2 /*return*/, this.prisma.warehouse.update({
                                where: { id: Number(id) },
                                data: dto
                            })];
                }
            });
        });
    };
    WarehouseService.prototype.deleteWarehouse = function (id, pharmacyId) {
        return __awaiter(this, void 0, void 0, function () {
            var warehouse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.warehouse.findUnique({
                            where: { id: Number(id) }
                        })];
                    case 1:
                        warehouse = _a.sent();
                        if (!warehouse)
                            throw new Error('Warehouse not found');
                        if (warehouse.owner_id !== pharmacyId) {
                            throw new Error('Unauthorized access to delete warehouse');
                        }
                        return [4 /*yield*/, this.prisma.warehouse["delete"]({ where: { id: Number(id) } })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { message: 'Warehouse deleted successfully' }];
                }
            });
        });
    };
    WarehouseService = __decorate([
        common_1.Injectable()
    ], WarehouseService);
    return WarehouseService;
}());
exports.WarehouseService = WarehouseService;
