"use strict";
exports.__esModule = true;
exports.UserEdit = exports.UserCreate = void 0;
var react_admin_1 = require("react-admin");
var roleChoices = [
    { id: 'PHARMACY_OWNER', name: 'PHARMACY_OWNER' },
    { id: 'PHARMACIST', name: 'PHARMACIST' },
];
var UserFormFields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "username", validate: react_admin_1.required() }),
    React.createElement(react_admin_1.TextInput, { source: "email", validate: react_admin_1.required() }),
    React.createElement(react_admin_1.TextInput, { source: "password_hash", label: "Password Hash", validate: react_admin_1.required() }),
    React.createElement(react_admin_1.SelectInput, { source: "role", choices: roleChoices }),
    React.createElement(react_admin_1.TextInput, { source: "pharmacy_id" }),
    React.createElement(react_admin_1.DateInput, { source: "created_at" }))); };
exports.UserCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(UserFormFields, null)))); };
exports.UserEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(UserFormFields, null)))); };
