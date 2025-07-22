"use strict";
exports.__esModule = true;
exports.PurchaseOrdersList = void 0;
var react_admin_1 = require("react-admin");
var FulfillOrderButton_1 = require("./FulfillOrderButton");
var filters = [React.createElement(react_admin_1.TextInput, { source: "status", label: "Filter by Status" })];
exports.PurchaseOrdersList = function () { return (React.createElement(react_admin_1.List, { filters: filters },
    React.createElement(react_admin_1.Datagrid, null,
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "supplier.name" }),
        React.createElement(react_admin_1.TextField, { source: "status" }),
        React.createElement(FulfillOrderButton_1.FulfillOrderButton, null)))); };
