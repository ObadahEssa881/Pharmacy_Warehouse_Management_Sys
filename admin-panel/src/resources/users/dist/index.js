"use strict";
exports.__esModule = true;
exports.UserCreate = exports.UserEdit = exports.UserList = void 0;
var react_admin_1 = require("react-admin");
exports.UserList = function () { return (React.createElement(react_admin_1.List, { title: "Users" },
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "username" }),
        React.createElement(react_admin_1.EmailField, { source: "email" }),
        React.createElement(react_admin_1.TextField, { source: "role" })))); };
exports.UserEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "username" }),
        React.createElement(react_admin_1.TextInput, { source: "email" }),
        React.createElement(react_admin_1.TextInput, { source: "role" })))); };
exports.UserCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "username" }),
        React.createElement(react_admin_1.TextInput, { source: "email" }),
        React.createElement(react_admin_1.TextInput, { source: "password", type: "password" }),
        React.createElement(react_admin_1.TextInput, { source: "role" }),
        React.createElement(react_admin_1.TextInput, { source: "pharmacy_id" })))); };
