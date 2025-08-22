"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateInventoryDto = void 0;
var class_validator_1 = require("class-validator");
var client_1 = require("@prisma/client");
var CreateInventoryDto = /** @class */ (function () {
    function CreateInventoryDto() {
    }
    __decorate([
        class_validator_1.IsInt()
    ], CreateInventoryDto.prototype, "medicine_id");
    __decorate([
        class_validator_1.IsEnum(client_1.LocationType)
    ], CreateInventoryDto.prototype, "location_type");
    __decorate([
        class_validator_1.IsPositive()
    ], CreateInventoryDto.prototype, "quantity");
    __decorate([
        class_validator_1.IsNumber()
    ], CreateInventoryDto.prototype, "cost_price");
    __decorate([
        class_validator_1.IsNumber()
    ], CreateInventoryDto.prototype, "selling_price");
    __decorate([
        class_validator_1.IsDateString()
    ], CreateInventoryDto.prototype, "expiry_date");
    return CreateInventoryDto;
}());
exports.CreateInventoryDto = CreateInventoryDto;
