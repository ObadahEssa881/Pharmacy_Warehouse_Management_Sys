"use strict";
exports.__esModule = true;
exports.SaleItemsPage = void 0;
var Table_1 = require("../components/tw/Table");
exports.SaleItemsPage = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Sale Items"),
    React.createElement(Table_1.TwTable, { resource: "sale-items", columns: [
            { source: 'id', label: 'ID' },
            { source: 'sale_id', label: 'Sale' },
            { source: 'medicine_id', label: 'Medicine' },
            { source: 'quantity', label: 'Qty' },
            { source: 'unit_price', label: 'Price' },
        ] }))); };
