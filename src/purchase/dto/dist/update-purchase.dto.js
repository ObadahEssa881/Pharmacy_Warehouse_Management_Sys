"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdatePurchaseStatusDto = void 0;
// src/purchase/dto/update-status.dto.ts
var class_validator_1 = require("class-validator");
var purchase_status_enum_1 = require("../../common/enums/purchase\u2011status.enum");
var UpdatePurchaseStatusDto = /** @class */ (function () {
    function UpdatePurchaseStatusDto() {
    }
    __decorate([
        class_validator_1.IsEnum(purchase_status_enum_1.PurchaseStatus)
    ], UpdatePurchaseStatusDto.prototype, "status");
    return UpdatePurchaseStatusDto;
}());
exports.UpdatePurchaseStatusDto = UpdatePurchaseStatusDto;
