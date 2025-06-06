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
    __decorate([
        common_1.Get()
    ], SupplierController.prototype, "findAll");
    __decorate([
        common_1.Get(':email'),
        __param(0, common_1.Param('email'))
    ], SupplierController.prototype, "findOne");
    __decorate([
        common_1.Delete('delete/:email'),
        __param(0, common_1.Param('email'))
    ], SupplierController.prototype, "remove");
    SupplierController = __decorate([
        roles_decorator_1.Roles('SUPPLIER_ADMIN'),
        common_1.UseGuards(guard_1.JwtGuard, guard_1.RoleGuard),
        common_1.Controller('supplier')
    ], SupplierController);
    return SupplierController;
}());
exports.SupplierController = SupplierController;
