"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateSaleDto = void 0;
// src/sale/dto/create-sale.dto.ts
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var SaleItemInput = /** @class */ (function () {
    function SaleItemInput() {
    }
    __decorate([
        class_validator_1.IsInt()
    ], SaleItemInput.prototype, "medicine_id");
    __decorate([
        class_validator_1.IsInt(),
        class_validator_1.IsPositive()
    ], SaleItemInput.prototype, "quantity");
    return SaleItemInput;
}());
var CreateSaleDto = /** @class */ (function () {
    function CreateSaleDto() {
    }
    __decorate([
        class_validator_1.IsOptional()
    ], CreateSaleDto.prototype, "customer_name");
    __decorate([
        class_validator_1.ValidateNested({ each: true }),
        class_transformer_1.Type(function () { return SaleItemInput; }),
        class_validator_1.IsArray()
    ], CreateSaleDto.prototype, "items");
    return CreateSaleDto;
}());
exports.CreateSaleDto = CreateSaleDto;
