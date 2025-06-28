"use strict";
exports.__esModule = true;
exports.CompanyEdit = exports.CompanyCreate = exports.CompanyList = void 0;
var react_admin_1 = require("react-admin");
exports.CompanyList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "name" }),
        React.createElement(react_admin_1.TextField, { source: "contact_person" }),
        React.createElement(react_admin_1.TextField, { source: "phone" }),
        React.createElement(react_admin_1.EmailField, { source: "email" }),
        React.createElement(react_admin_1.TextField, { source: "address" }),
        React.createElement(react_admin_1.EditButton, null),
        React.createElement(react_admin_1.DeleteButton, null)))); };
exports.CompanyCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "contact_person" }),
        React.createElement(react_admin_1.TextInput, { source: "phone", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "email", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "address", validate: react_admin_1.required() })))); };
exports.CompanyEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name" }),
        React.createElement(react_admin_1.TextInput, { source: "contact_person" }),
        React.createElement(react_admin_1.TextInput, { source: "phone" }),
        React.createElement(react_admin_1.TextInput, { source: "email" }),
        React.createElement(react_admin_1.TextInput, { source: "address" })))); };
