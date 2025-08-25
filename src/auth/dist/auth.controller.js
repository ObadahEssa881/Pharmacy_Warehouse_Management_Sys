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
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var AuthController = /** @class */ (function () {
    function AuthController(authService) {
        this.authService = authService;
    }
    AuthController.prototype.signupUser = function (dto) {
        return this.authService.signup(dto);
    };
    AuthController.prototype.signinUser = function (dto) {
        return this.authService.signin(dto);
    };
    AuthController.prototype.signupSupplier = function (dto) {
        return this.authService.signupSupplier(dto);
    };
    AuthController.prototype.signinSupplier = function (dto) {
        return this.authService.signinSupplier(dto);
    };
    __decorate([
        common_1.Post('user/signup'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "signupUser");
    __decorate([
        common_1.Post('user/signin'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "signinUser");
    __decorate([
        common_1.Post('supplier/signup'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "signupSupplier");
    __decorate([
        common_1.Post('supplier/signin'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "signinSupplier");
    AuthController = __decorate([
        common_1.Controller('auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
