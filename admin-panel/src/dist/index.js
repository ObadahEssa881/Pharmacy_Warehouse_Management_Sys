"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
client_1["default"].createRoot(document.getElementById('root')).render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(App_1.App, null)));
