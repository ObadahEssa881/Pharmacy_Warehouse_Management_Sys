"use strict";
exports.__esModule = true;
exports.CategoryEdit = exports.CategoryCreate = void 0;
var react_admin_1 = require("react-admin");
var Fields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "name", validate: react_admin_1.required() }),
    React.createElement(react_admin_1.TextInput, { source: "description" }))); };
exports.CategoryCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
exports.CategoryEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
