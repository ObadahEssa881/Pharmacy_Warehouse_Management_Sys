"use strict";
exports.__esModule = true;
exports.PurchaseOrderEdit = exports.PurchaseOrderCreate = void 0;
var react_admin_1 = require("react-admin");
var Fields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "supplier_id" }),
    React.createElement(react_admin_1.TextInput, { source: "pharmacy_id" }),
    React.createElement(react_admin_1.TextInput, { source: "status" }),
    React.createElement(react_admin_1.DateInput, { source: "order_date" }),
    React.createElement(react_admin_1.DateInput, { source: "delivery_date" }))); };
exports.PurchaseOrderCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
exports.PurchaseOrderEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
