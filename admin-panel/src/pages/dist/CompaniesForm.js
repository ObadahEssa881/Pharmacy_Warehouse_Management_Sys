"use strict";
exports.__esModule = true;
exports.CompanyEdit = exports.CompanyCreate = void 0;
var react_admin_1 = require("react-admin");
var Fields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "name", validate: react_admin_1.required() }),
    React.createElement(react_admin_1.TextInput, { source: "contact_person" }),
    React.createElement(react_admin_1.TextInput, { source: "phone" }),
    React.createElement(react_admin_1.TextInput, { source: "email" }),
    React.createElement(react_admin_1.TextInput, { source: "address" }))); };
exports.CompanyCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
exports.CompanyEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
