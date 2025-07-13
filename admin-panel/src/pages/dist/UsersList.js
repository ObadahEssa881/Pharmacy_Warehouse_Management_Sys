"use strict";
exports.__esModule = true;
exports.UsersList = void 0;
// src/pages/UsersList.tsx
var react_admin_1 = require("react-admin");
var AuthContext_1 = require("../auth/AuthContext");
var UserFilter = [
    React.createElement(react_admin_1.TextInput, { label: "Search by username", source: "username", alwaysOn: true }),
    React.createElement(react_admin_1.TextInput, { label: "Email", source: "email" }),
];
exports.UsersList = function () {
    var pharmacy_id = AuthContext_1.useAuth().pharmacy_id;
    return (React.createElement(react_admin_1.List, { filters: UserFilter, filter: { pharmacy_id: pharmacy_id }, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, { rowsPerPageOptions: [5, 10, 25] }) },
        React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
            React.createElement(react_admin_1.TextField, { source: "id" }),
            React.createElement(react_admin_1.TextField, { source: "username" }),
            React.createElement(react_admin_1.TextField, { source: "email" }),
            React.createElement(react_admin_1.TextField, { source: "role" }),
            React.createElement(react_admin_1.TextField, { source: "pharmacy_id" }),
            React.createElement(react_admin_1.DateField, { source: "created_at", showTime: true }))));
};
