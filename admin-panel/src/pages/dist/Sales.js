"use strict";
exports.__esModule = true;
exports.SalesPage = void 0;
var Table_1 = require("../components/tw/Table");
exports.SalesPage = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Sales"),
    React.createElement(Table_1.TwTable, { resource: "sales", columns: [
            { source: 'id', label: 'ID' },
            { source: 'pharmacy_id', label: 'Pharmacy' },
            { source: 'customer_name', label: 'Customer' },
            { source: 'sale_date', label: 'Date' },
            { source: 'total_amount', label: 'Total' },
            { source: 'payment_mode', label: 'Payment' },
        ] }))); };
