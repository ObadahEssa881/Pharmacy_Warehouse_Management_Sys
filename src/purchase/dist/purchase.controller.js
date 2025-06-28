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
var guard_1 = require("../auth/guard");
var get_user_decorator_1 = require("../common/decorators/get\u2011user.decorator");
var roles_decorator_1 = require("src/auth/decorators/roles.decorator");
var PurchaseController = /** @class */ (function () {
    function PurchaseController(service) {
        this.service = service;
    }
    PurchaseController.prototype.create = function (user, dto) {
        return this.service.create(user, dto);
    };
    PurchaseController.prototype.paginate = function (user, q) {
        return this.service.paginate(user, q);
    };
    PurchaseController.prototype.updateStatus = function (user, id, dto) {
        return this.service.updateStatus(user, id, dto);
    };
    __decorate([
        roles_decorator_1.Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN'),
        common_1.Post(),
        __param(0, get_user_decorator_1.GetUser()), __param(1, common_1.Body())
    ], PurchaseController.prototype, "create");
    __decorate([
        common_1.Get(),
        __param(0, get_user_decorator_1.GetUser()), __param(1, common_1.Query())
    ], PurchaseController.prototype, "paginate");
    __decorate([
        roles_decorator_1.Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN'),
        common_1.Patch(':id/status'),
        __param(0, get_user_decorator_1.GetUser()),
        __param(1, common_1.Param('id', common_1.ParseIntPipe)),
        __param(2, common_1.Body())
    ], PurchaseController.prototype, "updateStatus");
    PurchaseController = __decorate([
        common_1.Controller('purchase-orders'),
        common_1.UseGuards(guard_1.JwtGuard, guard_1.RoleGuard)
    ], PurchaseController);
    return PurchaseController;
}());
exports.PurchaseController = PurchaseController;
