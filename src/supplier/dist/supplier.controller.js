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
var SupplierController = /** @class */ (function () {
    function SupplierController(supplierService) {
        this.supplierService = supplierService;
    }
    SupplierController.prototype.create = function (createSupplierDto) {
        return this.supplierService.create(createSupplierDto);
    };
    SupplierController.prototype.findAll = function () {
        return this.supplierService.findAll();
    };
    SupplierController.prototype.findOne = function (id) {
        return this.supplierService.findOne(+id);
    };
    SupplierController.prototype.update = function (id, updateSupplierDto) {
        return this.supplierService.update(+id, updateSupplierDto);
    };
    SupplierController.prototype.remove = function (id) {
        return this.supplierService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], SupplierController.prototype, "create");
    __decorate([
        common_1.Get()
    ], SupplierController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], SupplierController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], SupplierController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], SupplierController.prototype, "remove");
    SupplierController = __decorate([
        common_1.Controller('supplier')
    ], SupplierController);
    return SupplierController;
}());
exports.SupplierController = SupplierController;
