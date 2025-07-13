"use strict";
exports.__esModule = true;
exports.NotificationEdit = exports.NotificationCreate = void 0;
var react_admin_1 = require("react-admin");
var Fields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "user_id" }),
    React.createElement(react_admin_1.TextInput, { source: "message" }),
    React.createElement(react_admin_1.TextInput, { source: "type" }),
    React.createElement(react_admin_1.BooleanInput, { source: "is_read" }),
    React.createElement(react_admin_1.DateInput, { source: "created_at" }))); };
exports.NotificationCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
exports.NotificationEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
