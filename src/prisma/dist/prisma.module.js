"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrismaModule = void 0;
var common_1 = require("@nestjs/common");
var prisma_service_1 = require("./prisma.service");
var runtime_1 = require("@zenstackhq/runtime");
var client_1 = require("@prisma/client");
var PrismaModule = /** @class */ (function () {
    function PrismaModule() {
    }
    PrismaModule = __decorate([
        common_1.Global(),
        common_1.Module({
            providers: [
                prisma_service_1.PrismaService,
                {
                    provide: 'PRISMA_CLIENT',
                    useFactory: function () {
                        var prisma = new client_1.PrismaClient();
                        var enhancedPrisma = runtime_1.enhance(prisma); // ✅ use enhance, NOT middleware
                        return enhancedPrisma;
                    }
                },
            ],
            exports: [prisma_service_1.PrismaService, 'PRISMA_CLIENT']
        })
    ], PrismaModule);
    return PrismaModule;
}());
exports.PrismaModule = PrismaModule;
