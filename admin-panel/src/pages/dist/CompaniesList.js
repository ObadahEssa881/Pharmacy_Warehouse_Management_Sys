"use strict";
exports.__esModule = true;
exports.CompaniesList = void 0;
var Table_1 = require("../components/tw/Table");
exports.CompaniesList = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Companies"),
    React.createElement(Table_1.TwTable, { resource: "companies", columns: [
            { source: 'id', label: 'ID' },
            { source: 'name', label: 'Name' },
            { source: 'contact_person', label: 'Contact' },
            { source: 'phone', label: 'Phone' },
            { source: 'email', label: 'Email' },
            { source: 'address', label: 'Address' },
        ] }))); };
