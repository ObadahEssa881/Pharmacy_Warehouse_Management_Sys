"use strict";
exports.__esModule = true;
exports.InvoiceEdit = exports.InvoiceCreate = exports.InvoiceList = void 0;
var react_admin_1 = require("react-admin");
exports.InvoiceList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.NumberField, { source: "id" }),
        React.createElement(react_admin_1.NumberField, { source: "order_id" }),
        React.createElement(react_admin_1.NumberField, { source: "supplier_id" }),
        React.createElement(react_admin_1.DateField, { source: "invoice_date" }),
        React.createElement(react_admin_1.NumberField, { source: "total_amount" }),
        React.createElement(react_admin_1.TextField, { source: "payment_status" }),
        React.createElement(react_admin_1.EditButton, null)))); };
exports.InvoiceCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.NumberInput, { source: "order_id" }),
        React.createElement(react_admin_1.NumberInput, { source: "supplier_id" }),
        React.createElement(react_admin_1.DateInput, { source: "invoice_date" }),
        React.createElement(react_admin_1.NumberInput, { source: "total_amount" }),
        React.createElement(react_admin_1.TextInput, { source: "payment_status" })))); };
exports.InvoiceEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "payment_status" }),
        React.createElement(react_admin_1.NumberInput, { source: "total_amount" })))); };
