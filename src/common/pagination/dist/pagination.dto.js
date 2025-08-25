"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaginationDto = void 0;
// src/common/pagination/pagination.dto.ts
var class_validator_1 = require("class-validator");
var PaginationDto = /** @class */ (function () {
    function PaginationDto() {
        this.page = 1;
        this.limit = 10;
    }
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsInt(),
        class_validator_1.Min(1)
    ], PaginationDto.prototype, "page");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsInt(),
        class_validator_1.Min(1)
    ], PaginationDto.prototype, "limit");
    return PaginationDto;
}());
exports.PaginationDto = PaginationDto;
