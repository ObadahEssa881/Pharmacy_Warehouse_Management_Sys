"use strict";
exports.__esModule = true;
exports.Unauthorized = void 0;
var react_router_dom_1 = require("react-router-dom");
exports.Unauthorized = function () { return (React.createElement("div", { className: "h-screen flex flex-col items-center justify-center space-y-4" },
    React.createElement("h1", { className: "text-4xl font-bold text-primary" }, "403"),
    React.createElement("p", { className: "text-lg" }, "You do not have access to this page."),
    React.createElement(react_router_dom_1.Link, { to: "/", className: "text-blue-600 underline" }, "Go Home"))); };
