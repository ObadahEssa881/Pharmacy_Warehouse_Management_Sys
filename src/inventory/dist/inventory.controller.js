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
exports.InventoryController = void 0;
var common_1 = require("@nestjs/common");
var guard_1 = require("src/auth/guard");
var roles_decorator_1 = require("src/auth/decorators/roles.decorator");
var get_user_decorator_1 = require("src/auth/decorators/get-user.decorator");
var InventoryController = /** @class */ (function () {
    function InventoryController(service) {
        this.service = service;
    }
    InventoryController.prototype.findAll = function (user, page, limit) {
        if (page === void 0) { page = '1'; }
        if (limit === void 0) { limit = '10'; }
        var pageNum = parseInt(page, 10);
        var limitNum = parseInt(limit, 10);
        return this.service.findAll(user, pageNum, limitNum);
    };
    InventoryController.prototype.findOne = function (id, user) {
        return this.service.findOne(+id, user);
    };
    InventoryController.prototype.create = function (dto, user) {
        return this.service.create(dto, user);
    };
    InventoryController.prototype.update = function (id, dto, user) {
        return this.service.update(+id, dto, user);
    };
    InventoryController.prototype.remove = function (id, user) {
        return this.service.remove(+id, user);
    };
    __decorate([
        common_1.Get(),
        __param(0, get_user_decorator_1.User()),
        __param(1, common_1.Query('page')),
        __param(2, common_1.Query('limit'))
    ], InventoryController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id')), __param(1, get_user_decorator_1.User())
    ], InventoryController.prototype, "findOne");
    __decorate([
        roles_decorator_1.Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN'),
        common_1.Post('create'),
        __param(0, common_1.Body()), __param(1, get_user_decorator_1.User())
    ], InventoryController.prototype, "create");
    __decorate([
        roles_decorator_1.Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN'),
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body()),
        __param(2, get_user_decorator_1.User())
    ], InventoryController.prototype, "update");
    __decorate([
        roles_decorator_1.Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN'),
        common_1.Delete(':id'),
        __param(0, common_1.Param('id')), __param(1, get_user_decorator_1.User())
    ], InventoryController.prototype, "remove");
    InventoryController = __decorate([
        common_1.UseGuards(guard_1.JwtGuard, guard_1.RoleGuard),
        common_1.Controller('inventory')
    ], InventoryController);
    return InventoryController;
}());
exports.InventoryController = InventoryController;
