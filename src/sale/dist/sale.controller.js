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
exports.SaleController = void 0;
var common_1 = require("@nestjs/common");
var guard_1 = require("../auth/guard");
var get_user_decorator_1 = require("../common/decorators/get\u2011user.decorator");
var SaleController = /** @class */ (function () {
    function SaleController(service) {
        this.service = service;
    }
    SaleController.prototype.create = function (user, dto) {
        return this.service.create(user, dto);
    };
    SaleController.prototype.paginate = function (user, q) {
        return this.service.paginate(user, q);
    };
    __decorate([
        common_1.Post(),
        __param(0, get_user_decorator_1.GetUser()), __param(1, common_1.Body())
    ], SaleController.prototype, "create");
    __decorate([
        common_1.Get(),
        __param(0, get_user_decorator_1.GetUser()), __param(1, common_1.Query())
    ], SaleController.prototype, "paginate");
    SaleController = __decorate([
        common_1.Controller('sales'),
        common_1.UseGuards(guard_1.JwtGuard, guard_1.RoleGuard)
    ], SaleController);
    return SaleController;
}());
exports.SaleController = SaleController;
