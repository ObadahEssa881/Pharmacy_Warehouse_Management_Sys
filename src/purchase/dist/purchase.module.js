"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PurchaseModule = void 0;
var common_1 = require("@nestjs/common");
var purchase_service_1 = require("./purchase.service");
var purchase_controller_1 = require("./purchase.controller");
var auth_module_1 = require("src/auth/auth.module");
var PurchaseModule = /** @class */ (function () {
    function PurchaseModule() {
    }
    PurchaseModule = __decorate([
        common_1.Module({
            controllers: [purchase_controller_1.PurchaseController],
            providers: [purchase_service_1.PurchaseService],
            imports: [auth_module_1.AuthModule]
        })
    ], PurchaseModule);
    return PurchaseModule;
}());
exports.PurchaseModule = PurchaseModule;
