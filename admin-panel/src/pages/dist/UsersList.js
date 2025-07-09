"use strict";
exports.__esModule = true;
exports.UsersList = void 0;
// src/pages/UsersList.tsx
var react_admin_1 = require("react-admin");
var material_1 = require("@mui/material");
var UsersTable = function () {
    var _a = react_admin_1.useListContext(), data = _a.data, isLoading = _a.isLoading;
    if (isLoading)
        return React.createElement("p", null, "Loading\u2026");
    if (!(data === null || data === void 0 ? void 0 : data.length))
        return React.createElement("p", null, "No records.");
    return (React.createElement(material_1.Card, { sx: { m: 2 } },
        React.createElement(material_1.CardContent, null,
            React.createElement("h2", null, "Users"),
            React.createElement("table", { className: "min-w-full" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "ID"),
                        React.createElement("th", null, "Email"),
                        React.createElement("th", null, "Role"),
                        React.createElement("th", null, "Pharmacy ID"))),
                React.createElement("tbody", null, data.map(function (u) {
                    var _a;
                    return (React.createElement("tr", { key: u.id },
                        React.createElement("td", null, u.id),
                        React.createElement("td", null, u.email),
                        React.createElement("td", null, u.role),
                        React.createElement("td", null, (_a = u.pharmacy_id) !== null && _a !== void 0 ? _a : '-')));
                }))))));
};
exports.UsersList = function () { return (React.createElement(react_admin_1.List, { resource: "users" },
    React.createElement(UsersTable, null))); };
