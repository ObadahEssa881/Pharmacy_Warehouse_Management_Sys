"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateMedicineDto = void 0;
// create-medicine.dto.ts
var class_validator_1 = require("class-validator");
var CreateMedicineDto = /** @class */ (function () {
    function CreateMedicineDto() {
    }
    __decorate([
        class_validator_1.IsString()
    ], CreateMedicineDto.prototype, "name");
    __decorate([
        class_validator_1.IsString()
    ], CreateMedicineDto.prototype, "titer");
    __decorate([
        class_validator_1.IsInt()
    ], CreateMedicineDto.prototype, "category_id");
    __decorate([
        class_validator_1.IsInt()
    ], CreateMedicineDto.prototype, "company_id");
    __decorate([
        class_validator_1.IsNumber()
    ], CreateMedicineDto.prototype, "unit_price");
    __decorate([
        class_validator_1.IsInt()
    ], CreateMedicineDto.prototype, "supplier_id");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString()
    ], CreateMedicineDto.prototype, "Type");
    return CreateMedicineDto;
}());
exports.CreateMedicineDto = CreateMedicineDto;
