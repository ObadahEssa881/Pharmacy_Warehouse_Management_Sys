"use strict";
exports.__esModule = true;
exports.PharmacyEdit = exports.PharmacyCreate = exports.PharmacyList = void 0;
var react_admin_1 = require("react-admin");
exports.PharmacyList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.NumberField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "name" }),
        React.createElement(react_admin_1.TextField, { source: "address" }),
        React.createElement(react_admin_1.TextField, { source: "contact_number" }),
        React.createElement(react_admin_1.NumberField, { source: "owner_id" }),
        React.createElement(react_admin_1.DateField, { source: "created_at" }),
        React.createElement(react_admin_1.EditButton, null),
        React.createElement(react_admin_1.DeleteButton, null)))); };
exports.PharmacyCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "address", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "contact_number", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.NumberInput, { source: "owner_id" })))); };
exports.PharmacyEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name" }),
        React.createElement(react_admin_1.TextInput, { source: "address" }),
        React.createElement(react_admin_1.TextInput, { source: "contact_number" }),
        React.createElement(react_admin_1.NumberInput, { source: "owner_id" })))); };
