"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
var react_query_1 = require("@tanstack/react-query");
var AuthContext_1 = require("./auth/AuthContext");
var PrivateRoute_1 = require("./auth/PrivateRoute");
var LoginPage_1 = require("./pages/LoginPage");
var dataProvider_1 = require("./dataProvider");
var TailAdminShell_1 = require("./components/TailAdminShell");
// Dashboard pages
var DashboardOwner_1 = require("./pages/DashboardOwner");
var DashboardSupplier_1 = require("./pages/DashboardSupplier");
var Unauthorized_1 = require("./pages/Unauthorized");
var react_admin_1 = require("react-admin");
// Resource pages
var UsersList_1 = require("./pages/UsersList");
var PharmaciesList_1 = require("./pages/PharmaciesList");
var WarehousesList_1 = require("./pages/WarehousesList");
var SuppliersList_1 = require("./pages/SuppliersList");
var CategoriesList_1 = require("./pages/CategoriesList");
var CompaniesList_1 = require("./pages/CompaniesList");
var MedicinesList_1 = require("./pages/MedicinesList");
var InventoryList_1 = require("./pages/InventoryList");
var PurchaseOrdersList_1 = require("./pages/PurchaseOrdersList");
var PurchaseOrderItemsList_1 = require("./pages/PurchaseOrderItemsList");
var InvoicesList_1 = require("./pages/InvoicesList");
var SalesList_1 = require("./pages/SalesList");
var SaleItemsList_1 = require("./pages/SaleItemsList");
var NotificationsList_1 = require("./pages/NotificationsList");
var RoleRedirect = function () {
    var role = AuthContext_1.useAuth().role;
    if (role === 'PHARMACY_OWNER')
        return React.createElement(react_router_dom_1.Navigate, { to: "/dashboard/owner" });
    if (role === 'SUPPLIER_ADMIN')
        return React.createElement(react_router_dom_1.Navigate, { to: "/dashboard/supplier" });
    return React.createElement(react_router_dom_1.Navigate, { to: "/login" });
};
var queryClient = new react_query_1.QueryClient();
exports.App = function () { return (React.createElement(AuthContext_1.AuthProvider, null,
    React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
        React.createElement(react_admin_1.AdminContext, { dataProvider: dataProvider_1.dataProvider },
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
                            React.createElement(UsersList_1.UsersList, null))), path: "/users" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(PharmaciesList_1.PharmaciesList, null))), path: "/pharmacies" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(WarehousesList_1.WarehousesList, null))), path: "/warehouses" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(SuppliersList_1.SuppliersList, null))), path: "/suppliers" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(CategoriesList_1.CategoriesList, null))), path: "/categories" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(CompaniesList_1.CompaniesList, null))), path: "/companies" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(MedicinesList_1.MedicinesList, null))), path: "/medicines" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(InventoryList_1.InventoryList, null))), path: "/inventory" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(PurchaseOrdersList_1.PurchaseOrdersList, null))), path: "/purchase-orders" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(PurchaseOrderItemsList_1.PurchaseOrderItemsList, null))), path: "/purchase-order-items" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(InvoicesList_1.InvoicesList, null))), path: "/invoices" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(SalesList_1.SalesList, null))), path: "/sales" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(SaleItemsList_1.SaleItemsList, null))), path: "/sale-items" }),
                React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateRoute_1.PrivateRoute, { roles: ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'] },
                        React.createElement(TailAdminShell_1.TailAdminShell, null,
                            React.createElement(NotificationsList_1.NotificationsList, null))), path: "/notifications" }),
                React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(RoleRedirect, null) })))))); };
