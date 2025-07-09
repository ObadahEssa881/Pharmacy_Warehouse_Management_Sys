"use strict";
exports.__esModule = true;
exports.InvoicesList = void 0;
var Table_1 = require("../components/tw/Table");
exports.InvoicesList = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Invoices"),
    React.createElement(Table_1.TwTable, { resource: "invoices", columns: [
            { source: 'id', label: 'ID' },
            { source: 'order_id', label: 'Order' },
            { source: 'supplier_id', label: 'Supplier' },
            { source: 'invoice_date', label: 'Date' },
            { source: 'total_amount', label: 'Amount' },
            { source: 'payment_status', label: 'Payment' },
        ] }))); };
