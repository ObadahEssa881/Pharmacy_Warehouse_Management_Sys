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
var CompanyController = /** @class */ (function () {
    function CompanyController(companyService) {
        this.companyService = companyService;
    }
    CompanyController.prototype.create = function (createCompanyDto) {
        return this.companyService.create(createCompanyDto);
    };
    CompanyController.prototype.findAll = function () {
        return this.companyService.findAll();
    };
    CompanyController.prototype.findOne = function (id) {
        return this.companyService.findOne(+id);
    };
    CompanyController.prototype.update = function (id, updateCompanyDto) {
        return this.companyService.update(+id, updateCompanyDto);
    };
    CompanyController.prototype.remove = function (id) {
        return this.companyService.remove(+id);
    };
    __decorate([
        common_1.Post('create'),
        __param(0, common_1.Body())
    ], CompanyController.prototype, "create");
    __decorate([
        common_1.UseGuards(guard_1.JwtGuard),
        common_1.Get('all')
    ], CompanyController.prototype, "findAll");
    __decorate([
        common_1.UseGuards(guard_1.JwtGuard),
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], CompanyController.prototype, "findOne");
    __decorate([
        common_1.UseGuards(guard_1.JwtGuard),
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], CompanyController.prototype, "update");
    __decorate([
        common_1.UseGuards(guard_1.JwtGuard),
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], CompanyController.prototype, "remove");
    CompanyController = __decorate([
        common_1.Controller('company')
    ], CompanyController);
    return CompanyController;
}());
exports.CompanyController = CompanyController;
