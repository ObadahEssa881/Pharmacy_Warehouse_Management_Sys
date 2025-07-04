"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
var AuthContext_1 = require("./auth/AuthContext");
var PrivateRoute_1 = require("./auth/PrivateRoute");
var LoginPage_1 = require("./pages/LoginPage");
var TailAdminShell_1 = require("./components/TailAdminShell");
// Dashboard pages
var DashboardOwner_1 = require("./pages/DashboardOwner");
var DashboardSupplier_1 = require("./pages/DashboardSupplier");
var Unauthorized_1 = require("./pages/Unauthorized");
// Resource pages
var Users_1 = require("./pages/Users");
var Pharmacies_1 = require("./pages/Pharmacies");
var Warehouses_1 = require("./pages/Warehouses");
var Suppliers_1 = require("./pages/Suppliers");
var Categories_1 = require("./pages/Categories");
var Companies_1 = require("./pages/Companies");
var Medicines_1 = require("./pages/Medicines");
var Inventory_1 = require("./pages/Inventory");
var PurchaseOrders_1 = require("./pages/PurchaseOrders");
var PurchaseOrderItems_1 = require("./pages/PurchaseOrderItems");
var Invoices_1 = require("./pages/Invoices");
var Sales_1 = require("./pages/Sales");
var SaleItems_1 = require("./pages/SaleItems");
var Notifications_1 = require("./pages/Notifications");
var RoleRedirect = function () {
    var role = AuthContext_1.useAuth().role;
    if (role === 'PHARMACY_OWNER')
        return React.createElement(react_router_dom_1.Navigate, { to: "/dashboard/owner" });
    if (role === 'SUPPLIER_ADMIN')
        return React.createElement(react_router_dom_1.Navigate, { to: "/dashboard/supplier" });
    return React.createElement(react_router_dom_1.Navigate, { to: "/login" });
};
exports.App = function () { return (React.createElement(AuthContext_1.AuthProvider, null,
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/login", element: React.createElement(LoginPage_1.LoginPage, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/unauthorized", element: React.createElement(Unauthorized_1.Unauthorized, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/dashboard/owner", element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(DashboardOwner_1.DashboardOwner, null))) }),
            React.createElement(react_router_dom_1.Route, { path: "/dashboard/supplier", element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(DashboardSupplier_1.DashboardSupplier, null))) }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Users_1.UsersPage, null))), path: "/users" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Pharmacies_1.PharmaciesPage, null))), path: "/pharmacies" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Warehouses_1.WarehousesPage, null))), path: "/warehouses" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Suppliers_1.SuppliersPage, null))), path: "/suppliers" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Categories_1.CategoriesPage, null))), path: "/categories" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Companies_1.CompaniesPage, null))), path: "/companies" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Medicines_1.MedicinesPage, null))), path: "/medicines" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Inventory_1.InventoryPage, null))), path: "/inventory" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(PurchaseOrders_1.PurchaseOrdersPage, null))), path: "/purchase-orders" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(PurchaseOrderItems_1.PurchaseOrderItemsPage, null))), path: "/purchase-order-items" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Invoices_1.InvoicesPage, null))), path: "/invoices" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Sales_1.SalesPage, null))), path: "/sales" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(SaleItems_1.SaleItemsPage, null))), path: "/sale-items" }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                    React.createElement(TailAdminShell_1.TailAdminShell, null,
                        React.createElement(Notifications_1.NotificationsPage, null))), path: "/notifications" }),
            React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(RoleRedirect, null) }))))); };
