"use strict";
exports.__esModule = true;
exports.buildPagination = void 0;
exports.buildPagination = function (p) {
    var _a, _b;
    var page = (_a = p.page) !== null && _a !== void 0 ? _a : 1; // fallback to 1
    var limit = (_b = p.limit) !== null && _b !== void 0 ? _b : 10; // fallback to 10
    return {
        skip: (page - 1) * limit,
        take: limit
    };
};
