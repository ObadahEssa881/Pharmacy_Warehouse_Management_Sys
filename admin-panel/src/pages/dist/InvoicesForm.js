"use strict";
exports.__esModule = true;
exports.InvoiceEdit = exports.InvoiceCreate = void 0;
var react_admin_1 = require("react-admin");
var Fields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "order_id" }),
    React.createElement(react_admin_1.TextInput, { source: "supplier_id" }),
    React.createElement(react_admin_1.NumberInput, { source: "total_amount" }),
    React.createElement(react_admin_1.TextInput, { source: "payment_status" }),
    React.createElement(react_admin_1.DateInput, { source: "invoice_date" }))); };
exports.InvoiceCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
exports.InvoiceEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
