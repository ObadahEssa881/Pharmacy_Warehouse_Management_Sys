"use strict";
// src/auth/decorators/user.decorator.ts
exports.__esModule = true;
exports.User = void 0;
var common_1 = require("@nestjs/common");
exports.User = common_1.createParamDecorator(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return request.user;
});
