"use strict";
exports.__esModule = true;
exports.SuppliersList = void 0;
var Table_1 = require("../components/tw/Table");
exports.SuppliersList = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Suppliers"),
    React.createElement(Table_1.TwTable, { resource: "suppliers", columns: [
            { source: 'id', label: 'ID' },
            { source: 'name', label: 'Name' },
            { source: 'email', label: 'Email' },
            { source: 'role', label: 'Role' },
            { source: 'contact_person', label: 'Contact' },
            { source: 'phone', label: 'Phone' },
            { source: 'warehouseId', label: 'Warehouse' },
        ] }))); };
