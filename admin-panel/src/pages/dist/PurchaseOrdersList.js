"use strict";
exports.__esModule = true;
exports.PurchaseOrdersList = void 0;
var Table_1 = require("../components/tw/Table");
exports.PurchaseOrdersList = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Purchase Orders"),
    React.createElement(Table_1.TwTable, { resource: "purchase-orders", columns: [
            { source: 'id', label: 'ID' },
            { source: 'supplier_id', label: 'Supplier' },
            { source: 'pharmacy_id', label: 'Pharmacy' },
            { source: 'order_date', label: 'Ordered' },
            { source: 'delivery_date', label: 'Delivery' },
            { source: 'status', label: 'Status' },
        ] }))); };
