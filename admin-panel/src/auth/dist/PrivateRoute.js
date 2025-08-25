"use strict";
exports.__esModule = true;
exports.PrivateRoute = void 0;
var react_router_dom_1 = require("react-router-dom");
var AuthContext_1 = require("./AuthContext");
exports.PrivateRoute = function (_a) {
    var roles = _a.roles, children = _a.children;
    var _b = AuthContext_1.useAuth(), token = _b.token, role = _b.role;
    if (!token)
        return React.createElement(react_router_dom_1.Navigate, { to: "/login", replace: true });
    if (!roles.includes(role || ''))
        return React.createElement(react_router_dom_1.Navigate, { to: "/unauthorized", replace: true });
    return children;
};
