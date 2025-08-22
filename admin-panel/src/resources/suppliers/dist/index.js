"use strict";
exports.__esModule = true;
exports.SupplierEdit = exports.SupplierCreate = exports.SupplierList = void 0;
var react_admin_1 = require("react-admin");
var roleChoices = [
    { id: 'SUPPLIER_ADMIN', name: 'Admin' },
    { id: 'SUPPLIER_EMPLOYEE', name: 'Employee' },
];
exports.SupplierList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.NumberField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "name" }),
        React.createElement(react_admin_1.EmailField, { source: "email" }),
        React.createElement(react_admin_1.SelectField, { source: "role", choices: roleChoices }),
        React.createElement(react_admin_1.TextField, { source: "contact_person" }),
        React.createElement(react_admin_1.TextField, { source: "phone" }),
        React.createElement(react_admin_1.TextField, { source: "address" }),
        React.createElement(react_admin_1.NumberField, { source: "warehouseId" }),
        React.createElement(react_admin_1.EditButton, null),
        React.createElement(react_admin_1.DeleteButton, null)))); };
exports.SupplierCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "email", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "password_hash", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.SelectInput, { source: "role", choices: roleChoices, validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "contact_person" }),
        React.createElement(react_admin_1.TextInput, { source: "phone", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "address", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.NumberInput, { source: "warehouseId", validate: react_admin_1.required() })))); };
exports.SupplierEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name" }),
        React.createElement(react_admin_1.TextInput, { source: "email" }),
        React.createElement(react_admin_1.SelectInput, { source: "role", choices: roleChoices }),
        React.createElement(react_admin_1.TextInput, { source: "contact_person" }),
        React.createElement(react_admin_1.TextInput, { source: "phone" }),
        React.createElement(react_admin_1.TextInput, { source: "address" })))); };
