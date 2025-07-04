"use strict";
exports.__esModule = true;
exports.MedicinesPage = void 0;
var Table_1 = require("../components/tw/Table");
exports.MedicinesPage = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Medicines"),
    React.createElement(Table_1.TwTable, { resource: "medicines", columns: [
            { source: 'id', label: 'ID' },
            { source: 'name', label: 'Name' },
            { source: 'titer', label: 'Titer' },
            { source: 'category_id', label: 'Category' },
            { source: 'company_id', label: 'Company' },
            { source: 'unit_price', label: 'Price' },
            { source: 'Type', label: 'Type' },
        ] }))); };
