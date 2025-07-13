"use strict";
exports.__esModule = true;
exports.SaleItemEdit = exports.SaleItemCreate = void 0;
var react_admin_1 = require("react-admin");
var Fields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "sale_id" }),
    React.createElement(react_admin_1.TextInput, { source: "medicine_id" }),
    React.createElement(react_admin_1.NumberInput, { source: "quantity" }),
    React.createElement(react_admin_1.NumberInput, { source: "unit_price" }))); };
exports.SaleItemCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
exports.SaleItemEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
