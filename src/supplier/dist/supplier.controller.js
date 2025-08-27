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
exports.SupplierController = void 0;
var common_1 = require("@nestjs/common");
var guard_1 = require("src/auth/guard");
var roles_decorator_1 = require("src/auth/decorators/roles.decorator");
var decorators_1 = require("src/auth/decorators");
var SupplierController = /** @class */ (function () {
    function SupplierController(supplierService) {
        this.supplierService = supplierService;
    }
    SupplierController.prototype.findAll = function () {
        return this.supplierService.findAll();
    };
    SupplierController.prototype.findOne = function (email) {
        return this.supplierService.findOne(email);
    };
    SupplierController.prototype.remove = function (email) {
        return this.supplierService.remove(email);
    };
    // GET /suppliers/me/purchase-orders
    SupplierController.prototype.getMyOrders = function (user) {
        return this.supplierService.getOrdersBySupplier(user);
    };
    SupplierController.prototype.updateStatus = function (id, dto, user) {
        return this.supplierService.updateStatus(user, id, dto.status);
    };
    __decorate([
        roles_decorator_1.Roles('SUPPLIER_ADMIN'),
        common_1.Get()
    ], SupplierController.prototype, "findAll");
    __decorate([
        roles_decorator_1.Roles('SUPPLIER_ADMIN'),
        common_1.Get(':email'),
        __param(0, common_1.Param('email'))
    ], SupplierController.prototype, "findOne");
    __decorate([
        roles_decorator_1.Roles('SUPPLIER_ADMIN'),
        common_1.Delete('delete/:email'),
        __param(0, common_1.Param('email'))
    ], SupplierController.prototype, "remove");
    __decorate([
        common_1.Get('me/purchase-orders'),
        roles_decorator_1.Roles('SUPPLIER_EMPLOYEE'),
        __param(0, decorators_1.User())
    ], SupplierController.prototype, "getMyOrders");
    __decorate([
        common_1.Patch(':id/status'),
        roles_decorator_1.Roles('SUPPLIER_EMPLOYEE'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe)),
        __param(1, common_1.Body()),
        __param(2, decorators_1.User())
    ], SupplierController.prototype, "updateStatus");
    SupplierController = __decorate([
        common_1.UseGuards(guard_1.JwtGuard, guard_1.RoleGuard),
        common_1.Controller('supplier')
    ], SupplierController);
    return SupplierController;
}());
exports.SupplierController = SupplierController;
