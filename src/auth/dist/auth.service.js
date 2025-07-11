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
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var argon = require("argon2");
var library_1 = require("@prisma/client/runtime/library");
var AuthService = /** @class */ (function () {
    function AuthService(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    AuthService.prototype.signup = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, pharmacy, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, argon.hash(dto.password)];
                    case 1:
                        hash = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, this.prisma.pharmacy.create({
                                data: {
                                    name: dto.propertyName + "'s Pharmacy",
                                    address: dto.address || 'N/A',
                                    contact_number: dto.contact_number || 'N/A'
                                }
                            })];
                    case 3:
                        pharmacy = _a.sent();
                        return [4 /*yield*/, this.prisma.user.create({
                                data: {
                                    username: dto.username,
                                    email: dto.email,
                                    password_hash: hash,
                                    role: dto.role,
                                    pharmacy_id: pharmacy.id
                                }
                            })];
                    case 4:
                        user = _a.sent();
                        // Update pharmacy to set owner_id after user is created
                        return [4 /*yield*/, this.prisma.pharmacy.update({
                                where: { id: pharmacy.id },
                                data: { owner_id: user.id }
                            })];
                    case 5:
                        // Update pharmacy to set owner_id after user is created
                        _a.sent();
                        return [2 /*return*/, 'created'];
                    case 6:
                        error_1 = _a.sent();
                        if (error_1 instanceof library_1.PrismaClientKnownRequestError) {
                            if (error_1.code == 'P2002') {
                                throw new common_1.ForbiddenException('Credentials Taken');
                            }
                        }
                        throw error_1;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signin = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.user.findUnique({
                            where: {
                                email: dto.email
                            }
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.ForbiddenException('Credentials incorrect');
                        }
                        return [4 /*yield*/, argon.verify(user.password_hash, dto.password)];
                    case 2:
                        if (!(_a.sent())) {
                            throw new common_1.ForbiddenException('Credentials incorrect');
                        }
                        return [4 /*yield*/, this.prisma.pharmacy.findUnique({
                                where: { id: user.pharmacy_id }
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.signToken(user.id, user.email, user.role, 'user', user.pharmacy_id, null)];
                }
            });
        });
    };
    AuthService.prototype.signupSupplier = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, warehouse, supplier, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, argon.hash(dto.password)];
                    case 1:
                        hash = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, this.prisma.warehouse.create({
                                data: {
                                    name: dto.propertyName + "'s Warehouse",
                                    address: dto.warehouseAddress || 'N/A',
                                    contact_number: dto.contact_number || 'N/A'
                                }
                            })];
                    case 3:
                        warehouse = _a.sent();
                        return [4 /*yield*/, this.prisma.supplier.create({
                                data: {
                                    name: dto.name,
                                    email: dto.email,
                                    password_hash: hash,
                                    role: dto.role,
                                    contact_person: dto.contact_person,
                                    phone: dto.phone,
                                    address: dto.address,
                                    warehouseId: warehouse.id
                                }
                            })];
                    case 4:
                        supplier = _a.sent();
                        // Update warehouse to set owner_id
                        return [4 /*yield*/, this.prisma.warehouse.update({
                                where: { id: warehouse.id },
                                data: { owner_id: supplier.id }
                            })];
                    case 5:
                        // Update warehouse to set owner_id
                        _a.sent();
                        return [2 /*return*/, 'created'];
                    case 6:
                        error_2 = _a.sent();
                        if (error_2 instanceof library_1.PrismaClientKnownRequestError &&
                            error_2.code === 'P2002') {
                            throw new common_1.ForbiddenException('Credential Taken');
                        }
                        throw error_2;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signinSupplier = function (dto) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var supplier, _b, warehouse;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.prisma.supplier.findUnique({
                            where: { email: dto.email }
                        })];
                    case 1:
                        supplier = _c.sent();
                        _b = !supplier;
                        if (_b) return [3 /*break*/, 3];
                        return [4 /*yield*/, argon.verify(supplier.password_hash, dto.password)];
                    case 2:
                        _b = !(_c.sent());
                        _c.label = 3;
                    case 3:
                        if (_b) {
                            throw new common_1.ForbiddenException('Credentials incorrect');
                        }
                        return [4 /*yield*/, this.prisma.warehouse.findUnique({
                                where: { id: supplier.warehouseId }
                            })];
                    case 4:
                        warehouse = _c.sent();
                        return [2 /*return*/, this.signToken(supplier.id, supplier.email, supplier.role, 'supplier', null, (_a = warehouse === null || warehouse === void 0 ? void 0 : warehouse.id) !== null && _a !== void 0 ? _a : null)];
                }
            });
        });
    };
    AuthService.prototype.signToken = function (id, email, role, accountType, pharmacy_id, warehouse_id) {
        if (pharmacy_id === void 0) { pharmacy_id = null; }
        if (warehouse_id === void 0) { warehouse_id = null; }
        return __awaiter(this, void 0, Promise, function () {
            var payload, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = {
                            id: id,
                            email: email,
                            role: role,
                            type: accountType,
                            pharmacy_id: pharmacy_id,
                            warehouse_id: warehouse_id
                        };
                        return [4 /*yield*/, this.jwt.signAsync(payload, {
                                expiresIn: '1h',
                                secret: this.config.get('JWT_SECRET')
                            })];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, { access_token: token }];
                }
            });
        });
    };
    AuthService = __decorate([
        common_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
