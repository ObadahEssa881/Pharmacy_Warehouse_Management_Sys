"use strict";
exports.__esModule = true;
exports.UsersPage = void 0;
var Table_1 = require("../components/tw/Table");
exports.UsersPage = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Users"),
    React.createElement(Table_1.TwTable, { resource: "users", columns: [
            { source: 'id', label: 'ID' },
            { source: 'username', label: 'Username' },
            { source: 'email', label: 'Email' },
            { source: 'role', label: 'Role' },
        ] }))); };
