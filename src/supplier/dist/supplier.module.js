"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SupplierModule = void 0;
var common_1 = require("@nestjs/common");
var supplier_service_1 = require("./supplier.service");
var supplier_controller_1 = require("./supplier.controller");
var auth_module_1 = require("src/auth/auth.module");
var SupplierModule = /** @class */ (function () {
    function SupplierModule() {
    }
    SupplierModule = __decorate([
        common_1.Module({
            controllers: [supplier_controller_1.SupplierController],
            providers: [supplier_service_1.SupplierService],
            imports: [auth_module_1.AuthModule]
        })
    ], SupplierModule);
    return SupplierModule;
}());
exports.SupplierModule = SupplierModule;
