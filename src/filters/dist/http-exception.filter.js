'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.HttpExceptionFilter = void 0;
var common_1 = require('@nestjs/common');
var HttpExceptionFilter = /** @class */ (function () {
  function HttpExceptionFilter() {}
  HttpExceptionFilter.prototype['catch'] = function (exception, host) {
    var ctx = host.switchToHttp();
    var response = ctx.getResponse();
    var request = ctx.getRequest();
    var status =
      exception instanceof common_1.HttpException
        ? exception.getStatus()
        : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
    var message =
      exception instanceof common_1.HttpException
        ? exception.getResponse()
        : exception.message;
    // Log the error (optional)
    console.error(
      '[Exception] ' + exception.constructor.name + ':',
      exception.message,
    );
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
    });
  };
  HttpExceptionFilter = __decorate([common_1.Catch()], HttpExceptionFilter);
  return HttpExceptionFilter;
})();
exports.HttpExceptionFilter = HttpExceptionFilter;
