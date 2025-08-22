"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListQueryDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var ListQueryDto = /** @class */ (function () {
    function ListQueryDto() {
        this.page = 1;
        this.limit = 20;
    }
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], ListQueryDto.prototype, "search");
    __decorate([
        class_validator_1.IsOptional(),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            if (!value)
                return undefined;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            if (typeof value === 'object')
                return value;
            try {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
                return JSON.parse(value);
            }
            catch (_b) {
                return undefined;
            }
        })
    ], ListQueryDto.prototype, "filter");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], ListQueryDto.prototype, "select");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], ListQueryDto.prototype, "include");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], ListQueryDto.prototype, "sort");
    __decorate([
        class_validator_1.IsOptional(),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return Number(value);
        }),
        class_validator_1.IsInt(),
        class_validator_1.Min(1)
    ], ListQueryDto.prototype, "page");
    __decorate([
        class_validator_1.IsOptional(),
        class_transformer_1.Transform(function (_a) {
            var value = _a.value;
            return Number(value);
        }),
        class_validator_1.IsInt(),
        class_validator_1.Min(1),
        class_validator_1.Max(200)
    ], ListQueryDto.prototype, "limit");
    return ListQueryDto;
}());
exports.ListQueryDto = ListQueryDto;
