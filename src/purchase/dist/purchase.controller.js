"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PurchaseController = void 0;
var common_1 = require("@nestjs/common");
// import { UpdatePurchaseDto } from './dto/update-purchase.dto';
var roles_decorator_1 = require("src/auth/decorators/roles.decorator");
var guard_1 = require("src/auth/guard");
var decorators_1 = require("src/auth/decorators");
var PurchaseController = /** @class */ (function () {
    function PurchaseController(purchaseService) {
        this.purchaseService = purchaseService;
    }
    PurchaseController.prototype.create = function (dto, user) {
        return this.purchaseService.create(dto, user);
    };
    __decorate([
        common_1.Post('create'),
        __param(0, common_1.Body()), __param(1, decorators_1.User())
    ], PurchaseController.prototype, "create");
    PurchaseController = __decorate([
        roles_decorator_1.Roles('PHARMACY_OWNER'),
        common_1.UseGuards(guard_1.JwtGuard, guard_1.RoleGuard),
        common_1.Controller('purchase')
    ], PurchaseController);
    return PurchaseController;
}());
exports.PurchaseController = PurchaseController;
