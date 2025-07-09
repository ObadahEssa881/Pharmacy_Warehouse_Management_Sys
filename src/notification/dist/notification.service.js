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
exports.NotificationService = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var date_fns_1 = require("date-fns");
var NotificationService = /** @class */ (function () {
    function NotificationService(prisma) {
        this.prisma = prisma;
    }
    // Daily check for expired and low stock inventory
    NotificationService.prototype.checkInventoryNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkExpiringInventory()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.checkLowStockInventory()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Check for items expiring in less than 2 months
    NotificationService.prototype.checkExpiringInventory = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var twoMonthsFromNow, expiringItems, _i, expiringItems_1, item, location, userIds, _e, userIds_1, userId, notificationDto;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        twoMonthsFromNow = date_fns_1.addMonths(new Date(), 2);
                        return [4 /*yield*/, this.prisma.inventory.findMany({
                                where: {
                                    expiry_date: {
                                        lte: twoMonthsFromNow
                                    }
                                },
                                include: {
                                    medicine: true,
                                    pharmacy: true,
                                    warehouse: true
                                }
                            })];
                    case 1:
                        expiringItems = _f.sent();
                        _i = 0, expiringItems_1 = expiringItems;
                        _f.label = 2;
                    case 2:
                        if (!(_i < expiringItems_1.length)) return [3 /*break*/, 8];
                        item = expiringItems_1[_i];
                        location = item.pharmacy_id
                            ? "Pharmacy: " + ((_a = item.pharmacy) === null || _a === void 0 ? void 0 : _a.name)
                            : "Warehouse: " + ((_b = item.warehouse) === null || _b === void 0 ? void 0 : _b.name);
                        return [4 /*yield*/, this.getUsersForLocation((_c = item.pharmacy_id) !== null && _c !== void 0 ? _c : undefined, (_d = item.warehouse_id) !== null && _d !== void 0 ? _d : undefined)];
                    case 3:
                        userIds = _f.sent();
                        _e = 0, userIds_1 = userIds;
                        _f.label = 4;
                    case 4:
                        if (!(_e < userIds_1.length)) return [3 /*break*/, 7];
                        userId = userIds_1[_e];
                        notificationDto = {
                            message: "Medicine " + item.medicine.name + " is expiring soon on " + item.expiry_date.toISOString().split('T')[0] + " at " + location,
                            type: 'EXPIRY_ALERT'
                        };
                        return [4 /*yield*/, this.createNotification(userId, notificationDto)];
                    case 5:
                        _f.sent();
                        _f.label = 6;
                    case 6:
                        _e++;
                        return [3 /*break*/, 4];
                    case 7:
                        _i++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    // Check for items with quantity below 5
    NotificationService.prototype.checkLowStockInventory = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var lowStockItems, _i, lowStockItems_1, item, location, userIds, _e, userIds_2, userId, notificationDto;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.prisma.inventory.findMany({
                            where: {
                                quantity: {
                                    lt: 5
                                }
                            },
                            include: {
                                medicine: true,
                                pharmacy: true,
                                warehouse: true
                            }
                        })];
                    case 1:
                        lowStockItems = _f.sent();
                        _i = 0, lowStockItems_1 = lowStockItems;
                        _f.label = 2;
                    case 2:
                        if (!(_i < lowStockItems_1.length)) return [3 /*break*/, 8];
                        item = lowStockItems_1[_i];
                        location = item.pharmacy_id
                            ? "Pharmacy: " + ((_a = item.pharmacy) === null || _a === void 0 ? void 0 : _a.name)
                            : "Warehouse: " + ((_b = item.warehouse) === null || _b === void 0 ? void 0 : _b.name);
                        return [4 /*yield*/, this.getUsersForLocation((_c = item.pharmacy_id) !== null && _c !== void 0 ? _c : undefined, (_d = item.warehouse_id) !== null && _d !== void 0 ? _d : undefined)];
                    case 3:
                        userIds = _f.sent();
                        _e = 0, userIds_2 = userIds;
                        _f.label = 4;
                    case 4:
                        if (!(_e < userIds_2.length)) return [3 /*break*/, 7];
                        userId = userIds_2[_e];
                        notificationDto = {
                            message: "Medicine " + item.medicine.name + " is low in stock (Quantity: " + item.quantity + ") at " + location,
                            type: 'LOW_STOCK_ALERT'
                        };
                        return [4 /*yield*/, this.createNotification(userId, notificationDto)];
                    case 5:
                        _f.sent();
                        _f.label = 6;
                    case 6:
                        _e++;
                        return [3 /*break*/, 4];
                    case 7:
                        _i++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    // Helper method to get users associated with a specific pharmacy or warehouse
    NotificationService.prototype.getUsersForLocation = function (pharmacyId, warehouseId) {
        return __awaiter(this, void 0, Promise, function () {
            var users, supplier;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(pharmacyId !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.prisma.user.findMany({
                                where: { pharmacy_id: pharmacyId },
                                select: { id: true }
                            })];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users.map(function (user) { return user.id; })];
                    case 2:
                        if (!(warehouseId !== undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.prisma.supplier.findFirst({
                                where: { warehouseId: warehouseId },
                                select: { id: true }
                            })];
                    case 3:
                        supplier = _a.sent();
                        return [2 /*return*/, supplier ? [supplier.id] : []];
                    case 4: return [2 /*return*/, []];
                }
            });
        });
    };
    // Create a new notification
    NotificationService.prototype.createNotification = function (userId, notificationDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.notification.create({
                        data: {
                            user_id: userId,
                            message: notificationDto.message,
                            type: notificationDto.type,
                            is_read: false
                        }
                    })];
            });
        });
    };
    // Get notifications for a specific user
    NotificationService.prototype.getUserNotifications = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.notification.findMany({
                        where: { user_id: userId },
                        orderBy: { created_at: 'desc' }
                    })];
            });
        });
    };
    // Mark notification as read
    NotificationService.prototype.markAsRead = function (notificationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.notification.update({
                        where: { id: notificationId },
                        data: { is_read: true }
                    })];
            });
        });
    };
    __decorate([
        schedule_1.Cron(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT)
    ], NotificationService.prototype, "checkInventoryNotifications");
    NotificationService = __decorate([
        common_1.Injectable()
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
