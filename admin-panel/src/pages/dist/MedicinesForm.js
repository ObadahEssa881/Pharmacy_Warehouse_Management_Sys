"use strict";
exports.__esModule = true;
exports.MedicineEdit = exports.MedicineCreate = void 0;
var react_admin_1 = require("react-admin");
var Fields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "name", validate: react_admin_1.required() }),
    React.createElement(react_admin_1.TextInput, { source: "titer" }),
    React.createElement(react_admin_1.NumberInput, { source: "unit_price" }),
    React.createElement(react_admin_1.TextInput, { source: "Type" }),
    React.createElement(react_admin_1.TextInput, { source: "category_id" }),
    React.createElement(react_admin_1.TextInput, { source: "company_id" }),
    React.createElement(react_admin_1.TextInput, { source: "supplier_id" }))); };
exports.MedicineCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
exports.MedicineEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
