"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MedicineModule = void 0;
var common_1 = require("@nestjs/common");
var medicine_service_1 = require("./medicine.service");
var medicine_controller_1 = require("./medicine.controller");
var auth_module_1 = require("src/auth/auth.module");
var MedicineModule = /** @class */ (function () {
    function MedicineModule() {
    }
    MedicineModule = __decorate([
        common_1.Module({
            controllers: [medicine_controller_1.MedicineController],
            providers: [medicine_service_1.MedicineService],
            imports: [auth_module_1.AuthModule]
        })
    ], MedicineModule);
    return MedicineModule;
}());
exports.MedicineModule = MedicineModule;
