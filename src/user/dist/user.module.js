"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var user_service_1 = require("./user.service");
var user_controller_1 = require("./user.controller");
var auth_module_1 = require("src/auth/auth.module");
var prisma_module_1 = require("../prisma.module");
var prisma_service_1 = require("../prisma.service");
var prisma_1 = require("@adminjs/prisma");
var adminjs_1 = require("adminjs");
var user_auth_service_1 = require("./auth/user-auth.service"); // Import your user authentication function
adminjs_1["default"].registerAdapter({ Database: prisma_1.Database, Resource: prisma_1.Resource });
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        common_1.Module({
            controllers: [user_controller_1.UserController],
            providers: [user_service_1.UserService],
            imports: [
                auth_module_1.AuthModule,
                prisma_module_1.PrismaModule,
                Promise.resolve().then(function () { return require('@adminjs/nestjs'); }).then(function (_a) {
                    var AdminModule = _a.AdminModule;
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                    return AdminModule.createAdminAsync({
                        imports: [prisma_module_1.PrismaModule],
                        useFactory: function (prisma) {
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                            var dmmf = prisma._baseDmmf;
                            return {
                                adminJsOptions: {
                                    rootPath: '/admin/users',
                                    resources: [
                                        {
                                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                                            resource: { model: dmmf.modelMap['User'], client: prisma },
                                            options: {}
                                        },
                                    ]
                                },
                                auth: {
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                    authenticate: user_auth_service_1.authenticateUser,
                                    cookieName: 'adminjs-users',
                                    cookiePassword: 'secret-users'
                                },
                                sessionOptions: {
                                    resave: true,
                                    saveUninitialized: true,
                                    secret: 'secret-users'
                                }
                            };
                        },
                        inject: [prisma_service_1.PrismaService]
                    });
                }),
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { AuthModule } from 'src/auth/auth.module';
// @Module({
//   controllers: [UserController],
//   providers: [UserService],
//   imports: [AuthModule],
// })
// export class UserModule {}
