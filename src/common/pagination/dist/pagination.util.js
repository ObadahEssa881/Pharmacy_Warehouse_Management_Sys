"use strict";
exports.__esModule = true;
exports.buildPagination = void 0;
function buildPagination(page, limit) {
    var skip = (page - 1) * limit;
    var take = limit;
    return { skip: skip, take: take };
}
exports.buildPagination = buildPagination;
