"use strict";
exports.__esModule = true;
exports.PurchaseOrderEdit = exports.PurchaseOrderCreate = exports.PurchaseOrderList = void 0;
var react_admin_1 = require("react-admin");
var statusChoices = [
    { id: 'PENDING', name: 'Pending' },
    { id: 'APPROVED', name: 'Approved' },
    { id: 'REJECTED', name: 'Rejected' },
];
exports.PurchaseOrderList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.NumberField, { source: "id" }),
        React.createElement(react_admin_1.NumberField, { source: "supplier_id" }),
        React.createElement(react_admin_1.NumberField, { source: "pharmacy_id" }),
        React.createElement(react_admin_1.DateField, { source: "order_date" }),
        React.createElement(react_admin_1.DateField, { source: "delivery_date" }),
        React.createElement(react_admin_1.TextField, { source: "status" }),
        React.createElement(react_admin_1.EditButton, null)))); };
exports.PurchaseOrderCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.NumberInput, { source: "supplier_id", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.NumberInput, { source: "pharmacy_id", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.DateInput, { source: "delivery_date" }),
        React.createElement(react_admin_1.SelectInput, { source: "status", choices: statusChoices, defaultValue: "PENDING" })))); };
exports.PurchaseOrderEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.SelectInput, { source: "status", choices: statusChoices }),
        React.createElement(react_admin_1.DateInput, { source: "delivery_date" })))); };
