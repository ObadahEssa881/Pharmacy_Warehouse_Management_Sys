"use strict";
exports.__esModule = true;
exports.PharmaciesList = void 0;
var Table_1 = require("../components/tw/Table");
exports.PharmaciesList = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Pharmacies"),
    React.createElement(Table_1.TwTable, { resource: "pharmacies", columns: [
            { source: 'id', label: 'ID' },
            { source: 'name', label: 'Name' },
            { source: 'address', label: 'Address' },
            { source: 'contact_number', label: 'Phone' },
            { source: 'owner_id', label: 'Owner' },
        ] }))); };
