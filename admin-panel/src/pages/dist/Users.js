"use strict";
exports.__esModule = true;
exports.UsersList = void 0;
// src/pages/UsersList.tsx
var react_admin_1 = require("react-admin");
exports.UsersList = function () {
    var _a = react_admin_1.useList('users'), data = _a.data, isLoading = _a.isLoading;
    if (isLoading)
        return React.createElement("p", null, "Loading...");
    if (!(data === null || data === void 0 ? void 0 : data.length))
        return React.createElement("p", null, "No records.");
    return (React.createElement("div", { className: "overflow-x-auto rounded-lg shadow" },
        React.createElement("table", { className: "min-w-full bg-white" },
            React.createElement("thead", { className: "bg-primary text-white" },
                React.createElement("tr", null,
                    React.createElement("th", { className: "px-4 py-2 text-left" }, "ID"),
                    React.createElement("th", { className: "px-4 py-2 text-left" }, "Username"),
                    React.createElement("th", { className: "px-4 py-2 text-left" }, "Email"),
                    React.createElement("th", { className: "px-4 py-2 text-left" }, "Role"),
                    React.createElement("th", { className: "px-4 py-2 text-left" }, "Pharmacy"),
                    React.createElement("th", { className: "px-4 py-2 text-left" }, "Created"))),
            React.createElement("tbody", null, data.map(function (user) { return (React.createElement("tr", { key: user.id, className: "odd:bg-gray-50 hover:bg-indigo-50 transition" },
                React.createElement("td", { className: "px-4 py-2" }, user.id),
                React.createElement("td", { className: "px-4 py-2" }, user.username),
                React.createElement("td", { className: "px-4 py-2" }, user.email),
                React.createElement("td", { className: "px-4 py-2" }, user.role),
                React.createElement("td", { className: "px-4 py-2" }, user.pharmacy_id),
                React.createElement("td", { className: "px-4 py-2" }, user.created_at))); })))));
};
