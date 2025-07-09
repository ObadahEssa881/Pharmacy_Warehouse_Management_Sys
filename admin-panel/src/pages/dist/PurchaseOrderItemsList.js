"use strict";
exports.__esModule = true;
exports.PurchaseOrderItemsList = void 0;
var Table_1 = require("../components/tw/Table");
exports.PurchaseOrderItemsList = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Purchase\u2011Order Items"),
    React.createElement(Table_1.TwTable, { resource: "purchase-order-items", columns: [
            { source: 'id', label: 'ID' },
            { source: 'order_id', label: 'Order' },
            { source: 'medicine_id', label: 'Medicine' },
            { source: 'quantity', label: 'Qty' },
            { source: 'unit_price', label: 'Price' },
        ] }))); };
