"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotificationsModule = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var notification_service_1 = require("./notification.service");
var notification_controller_1 = require("./notification.controller");
var prisma_service_1 = require("../prisma/prisma.service");
var firebase_admin_service_1 = require("./firebase-admin.service");
var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = __decorate([
        common_1.Module({
            imports: [schedule_1.ScheduleModule],
            providers: [notification_service_1.NotificationsService, prisma_service_1.PrismaService, firebase_admin_service_1.FirebaseAdminService],
            controllers: [notification_controller_1.NotificationsController],
            exports: [notification_service_1.NotificationsService]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());
exports.NotificationsModule = NotificationsModule;
