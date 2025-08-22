"use strict";
exports.__esModule = true;
exports.GetUser = void 0;
var common_1 = require("@nestjs/common");
exports.GetUser = common_1.createParamDecorator(function (_, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return request.user;
});
