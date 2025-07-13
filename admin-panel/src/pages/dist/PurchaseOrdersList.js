"use strict";
exports.__esModule = true;
exports.PurchaseOrdersList = void 0;
// src/pages/PurchaseOrdersList.tsx
var react_admin_1 = require("react-admin");
var AuthContext_1 = require("../auth/AuthContext");
exports.PurchaseOrdersList = function () {
    var pharmacy_id = AuthContext_1.useAuth().pharmacy_id;
    return (React.createElement(react_admin_1.List, { filter: { pharmacy_id: pharmacy_id }, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, null) },
        React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
            React.createElement(react_admin_1.TextField, { source: "id" }),
            React.createElement(react_admin_1.TextField, { source: "supplier_id" }),
            React.createElement(react_admin_1.DateField, { source: "order_date" }),
            React.createElement(react_admin_1.DateField, { source: "delivery_date" }),
            React.createElement(react_admin_1.TextField, { source: "status" }))));
};
