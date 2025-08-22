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
exports.NotificationsService = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var NotificationsService = /** @class */ (function () {
    function NotificationsService(prisma, firebaseService) {
        this.prisma = prisma;
        this.firebaseService = firebaseService;
        this.logger = new common_1.Logger(NotificationsService_1.name);
    }
    NotificationsService_1 = NotificationsService;
    NotificationsService.prototype.saveToken = function (userId, token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.notificationToken.upsert({
                        where: { token: token },
                        create: { user_id: userId, token: token },
                        update: { user_id: userId }
                    })];
            });
        });
    };
    NotificationsService.prototype.removeToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.notificationToken.deleteMany({ where: { token: token } })];
            });
        });
    };
    NotificationsService.prototype.getUserTokens = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.notificationToken.findMany({
                        where: { user_id: userId }
                    })];
            });
        });
    };
    /** 🔔 Scheduled job: twice per day */
    NotificationsService.prototype.scheduledInventoryChecks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pharmacies, _i, pharmacies_1, pharmacy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.pharmacy.findMany({
                            select: { id: true }
                        })];
                    case 1:
                        pharmacies = _a.sent();
                        _i = 0, pharmacies_1 = pharmacies;
                        _a.label = 2;
                    case 2:
                        if (!(_i < pharmacies_1.length)) return [3 /*break*/, 5];
                        pharmacy = pharmacies_1[_i];
                        return [4 /*yield*/, this.checkLowStockAndExpiry(pharmacy.id)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /** 🔔 Manual trigger (after sale, etc.) */
    NotificationsService.prototype.checkLowStockAndExpiry = function (pharmacy_id) {
        return __awaiter(this, void 0, void 0, function () {
            var lowStock, expiringSoon, users, _i, users_1, user, tokens, _a, tokens_1, t;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.logger.log("Checking stock/expiry for pharmacy " + pharmacy_id);
                        return [4 /*yield*/, this.prisma.inventory.findMany({
                                where: {
                                    pharmacy_id: pharmacy_id,
                                    quantity: { lt: 5 }
                                },
                                select: { id: true, medicine_id: true, quantity: true }
                            })];
                    case 1:
                        lowStock = _b.sent();
                        return [4 /*yield*/, this.prisma.inventory.findMany({
                                where: {
                                    pharmacy_id: pharmacy_id,
                                    expiry_date: { lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }
                                },
                                select: { id: true, medicine_id: true, expiry_date: true }
                            })];
                    case 2:
                        expiringSoon = _b.sent();
                        if (lowStock.length === 0 && expiringSoon.length === 0)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.prisma.user.findMany({
                                where: { pharmacy_id: pharmacy_id },
                                select: { id: true }
                            })];
                    case 3:
                        users = _b.sent();
                        _i = 0, users_1 = users;
                        _b.label = 4;
                    case 4:
                        if (!(_i < users_1.length)) return [3 /*break*/, 12];
                        user = users_1[_i];
                        return [4 /*yield*/, this.getUserTokens(user.id)];
                    case 5:
                        tokens = _b.sent();
                        _a = 0, tokens_1 = tokens;
                        _b.label = 6;
                    case 6:
                        if (!(_a < tokens_1.length)) return [3 /*break*/, 11];
                        t = tokens_1[_a];
                        if (!(lowStock.length > 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.firebaseService.sendNotification(t.token, 'Low Stock Alert', "Some medicines are below threshold in pharmacy " + pharmacy_id)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        if (!(expiringSoon.length > 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.firebaseService.sendNotification(t.token, 'Expiry Alert', "Some medicines will expire soon in pharmacy " + pharmacy_id)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        _a++;
                        return [3 /*break*/, 6];
                    case 11:
                        _i++;
                        return [3 /*break*/, 4];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    NotificationsService.prototype.sendPharmacyAlerts = function (pharmacy_id, lowStock, nearExpiry) {
        return __awaiter(this, void 0, void 0, function () {
            var users, tokens, title, body, _i, tokens_2, token, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.user.findMany({
                            where: {
                                pharmacy_id: pharmacy_id,
                                NotificationToken: { some: {} }
                            },
                            select: { NotificationToken: true }
                        })];
                    case 1:
                        users = _a.sent();
                        tokens = users.flatMap(function (u) {
                            return u.NotificationToken.map(function (t) { return t.token; });
                        });
                        if (!tokens.length) {
                            this.logger.log("No notification tokens for pharmacy " + pharmacy_id);
                            return [2 /*return*/];
                        }
                        title = 'Inventory Alerts';
                        body = "Low stock: " + lowStock + ", Near expiry: " + nearExpiry;
                        _i = 0, tokens_2 = tokens;
                        _a.label = 2;
                    case 2:
                        if (!(_i < tokens_2.length)) return [3 /*break*/, 7];
                        token = tokens_2[_i];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.firebaseService.sendNotification(token, title, body, {
                                pharmacy_id: String(pharmacy_id)
                            })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        this.logger.error("Failed to send notification to token " + token, err_1);
                        return [3 /*break*/, 6];
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /** Run through all pharmacies and trigger alerts */
    NotificationsService.prototype.checkAndNotifyAllPharmacies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pharmacies, _i, pharmacies_2, pharmacy, lowStock, nearExpiry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.pharmacy.findMany({
                            select: { id: true }
                        })];
                    case 1:
                        pharmacies = _a.sent();
                        _i = 0, pharmacies_2 = pharmacies;
                        _a.label = 2;
                    case 2:
                        if (!(_i < pharmacies_2.length)) return [3 /*break*/, 7];
                        pharmacy = pharmacies_2[_i];
                        return [4 /*yield*/, this.prisma.inventory.count({
                                where: { pharmacy_id: pharmacy.id, quantity: { lt: 5 } }
                            })];
                    case 3:
                        lowStock = _a.sent();
                        return [4 /*yield*/, this.prisma.inventory.count({
                                where: {
                                    pharmacy_id: pharmacy.id,
                                    expiry_date: {
                                        lte: new Date(new Date().setDate(new Date().getDate() + 7))
                                    }
                                }
                            })];
                    case 4:
                        nearExpiry = _a.sent();
                        if (!(lowStock || nearExpiry)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.sendPharmacyAlerts(pharmacy.id, lowStock, nearExpiry)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    var NotificationsService_1;
    __decorate([
        schedule_1.Cron('0 9,18 * * *') // 9 AM & 6 PM
    ], NotificationsService.prototype, "scheduledInventoryChecks");
    NotificationsService = NotificationsService_1 = __decorate([
        common_1.Injectable()
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;
