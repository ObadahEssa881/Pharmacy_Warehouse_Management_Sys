"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreatePurchaseDto = exports.PurchaseItemDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var PurchaseItemDto = /** @class */ (function () {
    function PurchaseItemDto() {
    }
    __decorate([
        class_validator_1.IsInt()
    ], PurchaseItemDto.prototype, "medicine_id");
    __decorate([
        class_validator_1.IsInt()
    ], PurchaseItemDto.prototype, "quantity");
    __decorate([
        class_validator_1.IsNumber()
    ], PurchaseItemDto.prototype, "unit_price");
    return PurchaseItemDto;
}());
exports.PurchaseItemDto = PurchaseItemDto;
var CreatePurchaseDto = /** @class */ (function () {
    function CreatePurchaseDto() {
    }
    __decorate([
        class_validator_1.IsInt()
    ], CreatePurchaseDto.prototype, "supplier_id");
    __decorate([
        class_validator_1.IsArray(),
        class_validator_1.ValidateNested({ each: true }),
        class_transformer_1.Type(function () { return PurchaseItemDto; })
    ], CreatePurchaseDto.prototype, "items");
    return CreatePurchaseDto;
}());
exports.CreatePurchaseDto = CreatePurchaseDto;
