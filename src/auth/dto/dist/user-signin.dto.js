"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignInDto = exports.SignUpDto = void 0;
var class_validator_1 = require("class-validator");
var client_1 = require("@prisma/client");
var SignUpDto = /** @class */ (function () {
    function SignUpDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty()
    ], SignUpDto.prototype, "username");
    __decorate([
        class_validator_1.IsEmail()
    ], SignUpDto.prototype, "email");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], SignUpDto.prototype, "password");
    __decorate([
        class_validator_1.IsEnum(client_1.UserRole)
    ], SignUpDto.prototype, "role");
    __decorate([
        class_validator_1.IsOptional()
    ], SignUpDto.prototype, "pharmacy_id");
    return SignUpDto;
}());
exports.SignUpDto = SignUpDto;
var SignInDto = /** @class */ (function () {
    function SignInDto() {
    }
    __decorate([
        class_validator_1.IsEmail()
    ], SignInDto.prototype, "email");
    __decorate([
        class_validator_1.IsNotEmpty()
    ], SignInDto.prototype, "password");
    return SignInDto;
}());
exports.SignInDto = SignInDto;
