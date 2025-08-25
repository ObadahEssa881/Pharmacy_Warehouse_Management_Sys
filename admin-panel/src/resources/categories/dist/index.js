"use strict";
exports.__esModule = true;
exports.CategoryEdit = exports.CategoryCreate = exports.CategoryList = void 0;
var react_admin_1 = require("react-admin");
exports.CategoryList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "name" }),
        React.createElement(react_admin_1.TextField, { source: "description" }),
        React.createElement(react_admin_1.EditButton, null),
        React.createElement(react_admin_1.DeleteButton, null)))); };
exports.CategoryCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "description" })))); };
exports.CategoryEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name" }),
        React.createElement(react_admin_1.TextInput, { source: "description" })))); };
