"use strict";
exports.__esModule = true;
exports.CategoriesList = void 0;
var Table_1 = require("../components/tw/Table");
exports.CategoriesList = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Categories"),
    React.createElement(Table_1.TwTable, { resource: "categories", columns: [
            { source: 'id', label: 'ID' },
            { source: 'name', label: 'Name' },
            { source: 'description', label: 'Description' },
        ] }))); };
