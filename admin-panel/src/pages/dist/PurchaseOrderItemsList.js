"use strict";
exports.__esModule = true;
exports.PurchaseOrderItemsList = void 0;
// src/pages/PurchaseOrderItemsList.tsx
var react_admin_1 = require("react-admin");
var Filter = [React.createElement(react_admin_1.TextInput, { label: "Order ID", source: "order_id" })];
exports.PurchaseOrderItemsList = function () { return (React.createElement(react_admin_1.List, { filters: Filter, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, null) },
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "order_id" }),
        React.createElement(react_admin_1.TextField, { source: "medicine_id" }),
        React.createElement(react_admin_1.TextField, { source: "quantity" }),
        React.createElement(react_admin_1.TextField, { source: "unit_price" })))); };
