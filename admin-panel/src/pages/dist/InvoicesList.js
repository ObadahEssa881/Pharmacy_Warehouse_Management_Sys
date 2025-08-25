"use strict";
exports.__esModule = true;
exports.InvoicesList = void 0;
// src/pages/InvoicesList.tsx
var react_admin_1 = require("react-admin");
var Filter = [React.createElement(react_admin_1.TextInput, { label: "Order ID", source: "order_id" })];
exports.InvoicesList = function () { return (React.createElement(react_admin_1.List, { filters: Filter, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, null) },
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "order_id" }),
        React.createElement(react_admin_1.TextField, { source: "supplier_id" }),
        React.createElement(react_admin_1.DateField, { source: "invoice_date" }),
        React.createElement(react_admin_1.TextField, { source: "total_amount" }),
        React.createElement(react_admin_1.TextField, { source: "payment_status" })))); };
