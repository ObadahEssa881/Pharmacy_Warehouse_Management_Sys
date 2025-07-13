"use strict";
exports.__esModule = true;
exports.NotificationsList = void 0;
// src/pages/NotificationsList.tsx
var react_admin_1 = require("react-admin");
var AuthContext_1 = require("../auth/AuthContext");
exports.NotificationsList = function () {
    var role = AuthContext_1.useAuth().role;
    return (React.createElement(react_admin_1.List, { perPage: 10, pagination: React.createElement(react_admin_1.Pagination, null), filter: role === 'SUPPLIER_ADMIN' ? {} : {} },
        React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
            React.createElement(react_admin_1.TextField, { source: "id" }),
            React.createElement(react_admin_1.TextField, { source: "message" }),
            React.createElement(react_admin_1.TextField, { source: "type" }),
            React.createElement(react_admin_1.DateField, { source: "created_at", showTime: true }),
            React.createElement(react_admin_1.TextField, { source: "is_read" }))));
};
