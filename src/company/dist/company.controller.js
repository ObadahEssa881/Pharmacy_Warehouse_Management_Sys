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
exports.CompanyController = void 0;
var common_1 = require("@nestjs/common");
var guard_1 = require("src/auth/guard");
var roles_decorator_1 = require("src/auth/decorators/roles.decorator");
var CompanyController = /** @class */ (function () {
    function CompanyController(companyService) {
        this.companyService = companyService;
    }
    CompanyController.prototype.create = function (dto) {
        return this.companyService.create(dto);
    };
    CompanyController.prototype.findAll = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        return this.companyService.findAll(page, limit);
    };
    CompanyController.prototype.findOne = function (id) {
        return this.companyService.findOne(id);
    };
    CompanyController.prototype.update = function (id, dto) {
        return this.companyService.update(id, dto);
    };
    CompanyController.prototype.remove = function (id) {
        return this.companyService.remove(id);
    };
    __decorate([
        roles_decorator_1.Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN'),
        common_1.Post('create'),
        __param(0, common_1.Body())
    ], CompanyController.prototype, "create");
    __decorate([
        common_1.Get('all'),
        __param(0, common_1.Query('page', common_1.ParseIntPipe)),
        __param(1, common_1.Query('limit', common_1.ParseIntPipe))
    ], CompanyController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe))
    ], CompanyController.prototype, "findOne");
    __decorate([
        roles_decorator_1.Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN'),
        common_1.Put('update/:id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body())
    ], CompanyController.prototype, "update");
    __decorate([
        roles_decorator_1.Roles('PHARMACY_OWNER', 'SUPPLIER_ADMIN'),
        common_1.Delete('delete/:id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe))
    ], CompanyController.prototype, "remove");
    CompanyController = __decorate([
        common_1.Controller('companies'),
        common_1.UseGuards(guard_1.JwtGuard, guard_1.RoleGuard)
    ], CompanyController);
    return CompanyController;
}());
exports.CompanyController = CompanyController;
