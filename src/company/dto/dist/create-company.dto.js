"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCompanyDto = void 0;
var class_validator_1 = require("class-validator");
var CreateCompanyDto = /** @class */ (function () {
    function CreateCompanyDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateCompanyDto.prototype, "name");
    __decorate([
        class_validator_1.IsString()
    ], CreateCompanyDto.prototype, "contact_person");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateCompanyDto.prototype, "phone");
    __decorate([
        class_validator_1.IsEmail(),
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateCompanyDto.prototype, "email");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateCompanyDto.prototype, "address");
    return CreateCompanyDto;
}());
exports.CreateCompanyDto = CreateCompanyDto;
