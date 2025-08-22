"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.NotificationsController = void 0;
var common_1 = require("@nestjs/common");
var NotificationsController = /** @class */ (function () {
    function NotificationsController(notificationsService) {
        this.notificationsService = notificationsService;
    }
    NotificationsController.prototype.registerToken = function (req, token) {
        // assume userId comes from auth middleware (req.user.id)
        return this.notificationsService.saveToken(req.user.id, token);
    };
    NotificationsController.prototype.removeToken = function (token) {
        return this.notificationsService.removeToken(token);
    };
    __decorate([
        common_1.Post('register-token'),
        __param(0, common_1.Req()), __param(1, common_1.Body('token'))
    ], NotificationsController.prototype, "registerToken");
    __decorate([
        common_1.Delete('remove-token'),
        __param(0, common_1.Body('token'))
    ], NotificationsController.prototype, "removeToken");
    NotificationsController = __decorate([
        common_1.Controller('notifications')
    ], NotificationsController);
    return NotificationsController;
}());
exports.NotificationsController = NotificationsController;
