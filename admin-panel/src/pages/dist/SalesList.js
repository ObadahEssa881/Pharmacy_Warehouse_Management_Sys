"use strict";
exports.__esModule = true;
exports.SalesList = void 0;
// src/pages/SalesList.tsx
var react_admin_1 = require("react-admin");
var AuthContext_1 = require("../auth/AuthContext");
var Filter = [React.createElement(react_admin_1.TextInput, { label: "Customer Name", source: "customer_name" })];
exports.SalesList = function () {
    var pharmacy_id = AuthContext_1.useAuth().pharmacy_id;
    return (React.createElement(react_admin_1.List, { filter: { pharmacy_id: pharmacy_id }, filters: Filter, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, null) },
        React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
            React.createElement(react_admin_1.TextField, { source: "id" }),
            React.createElement(react_admin_1.TextField, { source: "customer_name" }),
            React.createElement(react_admin_1.DateField, { source: "sale_date" }),
            React.createElement(react_admin_1.TextField, { source: "total_amount" }),
            React.createElement(react_admin_1.TextField, { source: "payment_mode" }))));
};
