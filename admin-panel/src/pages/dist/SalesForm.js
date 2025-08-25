"use strict";
exports.__esModule = true;
exports.SaleEdit = exports.SaleCreate = void 0;
var react_admin_1 = require("react-admin");
var Fields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "pharmacy_id" }),
    React.createElement(react_admin_1.TextInput, { source: "customer_name" }),
    React.createElement(react_admin_1.NumberInput, { source: "total_amount" }),
    React.createElement(react_admin_1.TextInput, { source: "payment_mode" }),
    React.createElement(react_admin_1.DateInput, { source: "sale_date" }))); };
exports.SaleCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
exports.SaleEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
