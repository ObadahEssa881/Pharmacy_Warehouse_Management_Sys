"use strict";
exports.__esModule = true;
var react_admin_1 = require("react-admin");
var DashboardCard_1 = require("../components/DashboardCard");
var Chart_1 = require("../components/Chart");
function Dashboard() {
    var lowStock = react_admin_1.useGetList('medicines', { filter: { low_stock: true } }).data;
    var sales = react_admin_1.useGetList('reports/sales', { pagination: { page: 1, perPage: 5 } }).data;
    return (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-4" },
        React.createElement(DashboardCard_1["default"], { title: "Low Stock Medicines", value: (lowStock === null || lowStock === void 0 ? void 0 : lowStock.length) || 0 }),
        React.createElement(DashboardCard_1["default"], { title: "Sales Trend" },
            React.createElement(Chart_1["default"], { data: sales || [], xKey: "date", yKey: "total_price" }))));
}
exports["default"] = Dashboard;
