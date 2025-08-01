"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrismaService = void 0;
var common_1 = require("@nestjs/common");
var client_1 = require("@prisma/client");
var PrismaService = /** @class */ (function (_super) {
    __extends(PrismaService, _super);
    function PrismaService(configService) {
        var _this = _super.call(this, {
            datasources: {
                db: {
                    url: configService.get('DATABASE_URL')
                }
            }
        }) || this;
        _this.configService = configService;
        return _this;
    }
    PrismaService = __decorate([
        common_1.Injectable()
    ], PrismaService);
    return PrismaService;
}(client_1.PrismaClient));
exports.PrismaService = PrismaService;
