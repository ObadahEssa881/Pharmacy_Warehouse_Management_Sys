"use strict";
exports.__esModule = true;
exports.TailAdminShell = void 0;
var react_1 = require("react");
var flowbite_react_1 = require("flowbite-react");
var hi_1 = require("react-icons/hi");
var ra_core_1 = require("ra-core");
var react_router_dom_1 = require("react-router-dom");
exports.TailAdminShell = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(true), open = _b[0], setOpen = _b[1];
    var logout = ra_core_1.useLogout();
    var pathname = react_router_dom_1.useLocation().pathname;
    var link = function (to) { return pathname.startsWith(to); };
    return (React.createElement(flowbite_react_1.Flowbite, null,
        React.createElement("div", { className: "flex h-screen overflow-hidden" },
            React.createElement(flowbite_react_1.Sidebar, { collapsed: !open, className: "bg-white shadow-md" },
                React.createElement(flowbite_react_1.Sidebar.Items, null,
                    React.createElement(flowbite_react_1.Sidebar.ItemGroup, null,
                        React.createElement(flowbite_react_1.Sidebar.Item, { icon: hi_1.HiMenu, onClick: function () { return setOpen(!open); }, className: "cursor-pointer" }, open && 'Collapse'),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/", icon: hi_1.HiOutlineHome, active: pathname === '/' }, "Dashboard"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/users", icon: hi_1.HiOutlineUserGroup, active: link('/users') }, "Users"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/pharmacies", icon: hi_1.HiOutlineUserGroup, active: link('/pharmacies') }, "Pharmacies"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/warehouses", icon: hi_1.HiTruck, active: link('/warehouses') }, "Warehouses"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/suppliers", icon: hi_1.HiOutlineUserGroup, active: link('/suppliers') }, "Suppliers"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/categories", icon: hi_1.HiCollection, active: link('/categories') }, "Categories"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/companies", icon: hi_1.HiOfficeBuilding, active: link('/companies') }, "Companies"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/medicines", icon: hi_1.HiBeaker, active: link('/medicines') }, "Medicines"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/inventory", icon: hi_1.HiArchive, active: link('/inventory') }, "Inventory"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/purchase-orders", icon: hi_1.HiClipboardList, active: link('/purchase-orders') }, "Purchase Orders"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/purchase-order-items", icon: hi_1.HiClipboardCheck, active: link('/purchase-order-items') }, "PO\u00A0Items"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/invoices", icon: hi_1.HiDocumentText, active: link('/invoices') }, "Invoices"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/sales", icon: hi_1.HiShoppingCart, active: link('/sales') }, "Sales"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/sale-items", icon: hi_1.HiReceiptRefund, active: link('/sale-items') }, "Sale\u00A0Items"),
                        React.createElement(flowbite_react_1.Sidebar.Item, { as: react_router_dom_1.Link, to: "/notifications", icon: hi_1.HiBell, active: link('/notifications') }, "Notifications")),
                    React.createElement(flowbite_react_1.Sidebar.ItemGroup, null,
                        React.createElement(flowbite_react_1.Sidebar.Item, { icon: hi_1.HiLogout, onClick: function () { return logout(); } }, "Logout")))),
            React.createElement("div", { className: "flex flex-col flex-1" },
                React.createElement(flowbite_react_1.Navbar, { fluid: true, rounded: true, className: "shadow backdrop-blur bg-white/70 sticky top-0 z-20" },
                    React.createElement(flowbite_react_1.Navbar.Brand, null,
                        React.createElement("span", { className: "self-center whitespace-nowrap text-xl font-semibold text-primary" }, "PharmaSys")),
                    React.createElement(flowbite_react_1.Navbar.Toggle, null)),
                React.createElement("main", { className: "p-6 overflow-y-auto" }, children)))));
};
