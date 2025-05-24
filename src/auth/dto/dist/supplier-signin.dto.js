"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SupplierSignInDto = exports.SupplierSignUpDto = void 0;
var class_validator_1 = require("class-validator");
var client_1 = require("@prisma/client");
var SupplierSignUpDto = /** @class */ (function () {
    function SupplierSignUpDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty()
    ], SupplierSignUpDto.prototype, "name");
    __decorate([
        class_validator_1.IsEmail()
    ], SupplierSignUpDto.prototype, "email");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], SupplierSignUpDto.prototype, "password");
    __decorate([
        class_validator_1.IsEnum(client_1.SupplierRole)
    ], SupplierSignUpDto.prototype, "role");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], SupplierSignUpDto.prototype, "phone");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], SupplierSignUpDto.prototype, "address");
    return SupplierSignUpDto;
}());
exports.SupplierSignUpDto = SupplierSignUpDto;
var SupplierSignInDto = /** @class */ (function () {
    function SupplierSignInDto() {
    }
    __decorate([
        class_validator_1.IsEmail()
    ], SupplierSignInDto.prototype, "email");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], SupplierSignInDto.prototype, "password");
    return SupplierSignInDto;
}());
exports.SupplierSignInDto = SupplierSignInDto;
