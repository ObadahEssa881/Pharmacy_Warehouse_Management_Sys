"use strict";
// create-purchase-order.dto.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PurchaseOrderItemDto = exports.CreatePurchaseOrderDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var CreatePurchaseOrderDto = /** @class */ (function () {
    function CreatePurchaseOrderDto() {
    }
    __decorate([
        class_validator_1.IsNumber()
    ], CreatePurchaseOrderDto.prototype, "supplier_id");
    __decorate([
        class_validator_1.IsArray(),
        class_validator_1.ValidateNested({ each: true }),
        class_transformer_1.Type(function () { return PurchaseOrderItemDto; })
    ], CreatePurchaseOrderDto.prototype, "items");
    __decorate([
        class_transformer_1.Type(function () { return Date; }),
        class_validator_1.IsDate()
    ], CreatePurchaseOrderDto.prototype, "deliveryDate");
    return CreatePurchaseOrderDto;
}());
exports.CreatePurchaseOrderDto = CreatePurchaseOrderDto;
var PurchaseOrderItemDto = /** @class */ (function () {
    function PurchaseOrderItemDto() {
    }
    __decorate([
        class_validator_1.IsNumber()
    ], PurchaseOrderItemDto.prototype, "medicine_id");
    __decorate([
        class_validator_1.IsNumber()
    ], PurchaseOrderItemDto.prototype, "quantity");
    __decorate([
        class_validator_1.IsNumber()
    ], PurchaseOrderItemDto.prototype, "unit_price");
    return PurchaseOrderItemDto;
}());
exports.PurchaseOrderItemDto = PurchaseOrderItemDto;
