"use strict";
exports.__esModule = true;
exports.buildMeta = exports.buildPagination = void 0;
function buildPagination(page, limit) {
    if (page === void 0) { page = 1; }
    if (limit === void 0) { limit = 20; }
    var take = Math.max(1, Math.min(limit, 200));
    var skip = (Math.max(1, page) - 1) * take;
    return { skip: skip, take: take };
}
exports.buildPagination = buildPagination;
function buildMeta(total, page, limit) {
    var pages = Math.max(1, Math.ceil(total / Math.max(1, limit)));
    return {
        total: total,
        page: page,
        limit: limit,
        pages: pages,
        hasNext: page < pages,
        hasPrev: page > 1
    };
}
exports.buildMeta = buildMeta;
