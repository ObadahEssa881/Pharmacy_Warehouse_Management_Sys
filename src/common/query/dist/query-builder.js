"use strict";
exports.__esModule = true;
exports.buildSelect = exports.buildInclude = exports.buildOrderBy = exports.buildWhereFromFilter = exports.buildSearchOrWhere = void 0;
/**
 * Build Prisma where clause for free-text search.
 * @param search - string from query param ?search=...
 * @param searchableFields - list of fields to search in
 */
function buildSearchOrWhere(search, searchableFields) {
    if (searchableFields === void 0) { searchableFields = []; }
    if (!search || searchableFields.length === 0)
        return undefined;
    return {
        OR: searchableFields.map(function (field) {
            var _a;
            return (_a = {},
                _a[field] = {
                    contains: search,
                    mode: 'insensitive'
                },
                _a);
        })
    };
}
exports.buildSearchOrWhere = buildSearchOrWhere;
/**
 * Build where filter from key=value query params
 */
function buildWhereFromFilter(filters) {
    var where = {};
    Object.entries(filters).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (value !== undefined && value !== null && value !== '') {
            where[key] = value;
        }
    });
    return where;
}
exports.buildWhereFromFilter = buildWhereFromFilter;
/**
 * Build orderBy clause from ?sort=field:asc
 */
function buildOrderBy(sort) {
    var _a;
    if (!sort)
        return undefined;
    var _b = sort.split(':'), field = _b[0], order = _b[1];
    return _a = {},
        _a[field] = order === 'desc' ? 'desc' : 'asc',
        _a;
}
exports.buildOrderBy = buildOrderBy;
/**
 * Build include clause for relations (?include=pharmacy,warehouse)
 */
function buildInclude(include) {
    if (!include)
        return undefined;
    var relations = include.split(',');
    return relations.reduce(function (acc, relation) {
        acc[relation] = true;
        return acc;
    }, {});
}
exports.buildInclude = buildInclude;
/**
 * Build select clause for picking fields (?select=id,name,email)
 */
function buildSelect(select) {
    if (!select)
        return undefined;
    var fields = select.split(',');
    return fields.reduce(function (acc, field) {
        acc[field] = true;
        return acc;
    }, {});
}
exports.buildSelect = buildSelect;
