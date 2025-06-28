"use strict";
exports.__esModule = true;
exports.NotificationList = void 0;
var react_admin_1 = require("react-admin");
exports.NotificationList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, null,
        React.createElement(react_admin_1.NumberField, { source: "id" }),
        React.createElement(react_admin_1.NumberField, { source: "user_id" }),
        React.createElement(react_admin_1.TextField, { source: "message" }),
        React.createElement(react_admin_1.TextField, { source: "type" }),
        React.createElement(react_admin_1.DateField, { source: "created_at" }),
        React.createElement(react_admin_1.BooleanField, { source: "is_read" })))); };
// notifications are usually system‑only -> read‑only; create/edit omitted
