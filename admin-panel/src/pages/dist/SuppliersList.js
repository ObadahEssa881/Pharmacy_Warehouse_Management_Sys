"use strict";
exports.__esModule = true;
exports.SuppliersList = void 0;
// src/pages/SuppliersList.tsx
var react_admin_1 = require("react-admin");
var AuthContext_1 = require("../auth/AuthContext");
var Filter = [
    React.createElement(react_admin_1.TextInput, { label: "Name", source: "name", alwaysOn: true }),
    React.createElement(react_admin_1.TextInput, { label: "Email", source: "email" }),
];
exports.SuppliersList = function () {
    var warehouse_id = AuthContext_1.useAuth().warehouse_id;
    return (React.createElement(react_admin_1.List, { filter: { warehouseId: warehouse_id }, filters: Filter, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, null) },
        React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
            React.createElement(react_admin_1.TextField, { source: "id" }),
            React.createElement(react_admin_1.TextField, { source: "name" }),
            React.createElement(react_admin_1.TextField, { source: "email" }),
            React.createElement(react_admin_1.TextField, { source: "role" }),
            React.createElement(react_admin_1.TextField, { source: "phone" }),
            React.createElement(react_admin_1.TextField, { source: "address" }))));
};
