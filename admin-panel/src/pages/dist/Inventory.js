"use strict";
exports.__esModule = true;
exports.InventoryPage = void 0;
var Table_1 = require("../components/tw/Table");
exports.InventoryPage = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Inventory"),
    React.createElement(Table_1.TwTable, { resource: "inventory", columns: [
            { source: 'id', label: 'ID' },
            { source: 'medicine_id', label: 'Medicine' },
            { source: 'location_type', label: 'Loc' },
            { source: 'quantity', label: 'Qty' },
            { source: 'cost_price', label: 'Cost' },
            { source: 'selling_price', label: 'Price' },
            { source: 'expiry_date', label: 'Expiry' },
            { source: 'pharmacy_id', label: 'Pharmacy' },
            { source: 'warehouse_id', label: 'Warehouse' },
        ] }))); };
