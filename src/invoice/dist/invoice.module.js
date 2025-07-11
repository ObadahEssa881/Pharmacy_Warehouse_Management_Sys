"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvoiceModule = void 0;
var common_1 = require("@nestjs/common");
var invoice_service_1 = require("./invoice.service");
var invoice_controller_1 = require("./invoice.controller");
var auth_module_1 = require("src/auth/auth.module");
var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        common_1.Module({
            controllers: [invoice_controller_1.InvoiceController],
            providers: [invoice_service_1.InvoiceService],
            imports: [auth_module_1.AuthModule]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());
exports.InvoiceModule = InvoiceModule;
