"use strict";
exports.__esModule = true;
exports.SaleEdit = exports.SaleCreate = exports.SaleList = void 0;
var react_admin_1 = require("react-admin");
exports.SaleList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.NumberField, { source: "id" }),
        React.createElement(react_admin_1.NumberField, { source: "pharmacy_id" }),
        React.createElement(react_admin_1.TextField, { source: "customer_name" }),
        React.createElement(react_admin_1.DateField, { source: "sale_date" }),
        React.createElement(react_admin_1.NumberField, { source: "total_amount" }),
        React.createElement(react_admin_1.TextField, { source: "payment_mode" }),
        React.createElement(react_admin_1.EditButton, null)))); };
exports.SaleCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.NumberInput, { source: "pharmacy_id", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "customer_name" }),
        React.createElement(react_admin_1.DateInput, { source: "sale_date" }),
        React.createElement(react_admin_1.NumberInput, { source: "total_amount", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "payment_mode", validate: react_admin_1.required() })))); };
exports.SaleEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "customer_name" }),
        React.createElement(react_admin_1.TextInput, { source: "payment_mode" })))); };
