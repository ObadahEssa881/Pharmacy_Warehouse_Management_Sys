"use strict";
exports.__esModule = true;
exports.App = void 0;
// src/App.tsx
var ra_core_1 = require("ra-core");
var react_router_dom_1 = require("react-router-dom");
var dataProvider_1 = require("./dataProvider");
var authProvider_1 = require("./authProvider");
var TailAdminShell_1 = require("./components/TailAdminShell");
var Users_1 = require("./pages/Users");
var Dashboard_1 = require("./pages/Dashboard");
exports.App = function () { return (React.createElement(ra_core_1.CoreAdminContext, { dataProvider: dataProvider_1.dataProvider, authProvider: authProvider_1.authProvider },
    React.createElement(TailAdminShell_1.TailAdminShell, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Dashboard_1.Dashboard, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/users", element: React.createElement(Users_1.UsersPage, null) }))))); };
