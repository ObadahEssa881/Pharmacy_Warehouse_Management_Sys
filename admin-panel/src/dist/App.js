"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@mui/material/styles");
var notistack_1 = require("notistack");
var react_query_1 = require("@tanstack/react-query");
var react_admin_1 = require("react-admin");
var AuthContext_1 = require("./auth/AuthContext");
var PrivateRoute_1 = require("./auth/PrivateRoute");
var LoginPage_1 = require("./pages/LoginPage");
var Unauthorized_1 = require("./pages/Unauthorized");
var DashboardOwner_1 = require("./pages/DashboardOwner");
var DashboardSupplier_1 = require("./pages/DashboardSupplier");
var TailAdminShell_1 = require("./components/TailAdminShell");
var roles_1 = require("./auth/roles");
var dataProvider_1 = require("./dataProvider");
var AuthProvider_1 = require("./auth/AuthProvider");
var ListPages_1 = require("./pages/ListPages");
var FormPages_1 = require("./pages/FormPages");
var theme = styles_1.createTheme({
    palette: { mode: 'light', primary: { main: '#1976d2' } }
});
var queryClient = new react_query_1.QueryClient();
var RoleRedirect = function () {
    var role = AuthContext_1.useAuth().role;
    if (role === roles_1["default"].OWNER)
        return react_1["default"].createElement(react_router_dom_1.Navigate, { to: "/dashboard/owner" });
    if (role === roles_1["default"].ADMIN)
        return react_1["default"].createElement(react_router_dom_1.Navigate, { to: "/dashboard/supplier" });
    return react_1["default"].createElement(react_router_dom_1.Navigate, { to: "/login" });
};
exports.App = function () { return (react_1["default"].createElement(react_query_1.QueryClientProvider, { client: queryClient },
    react_1["default"].createElement(react_admin_1.AdminContext, { dataProvider: dataProvider_1.dataProvider, authProvider: AuthProvider_1.authProvider },
        react_1["default"].createElement(styles_1.ThemeProvider, { theme: theme },
            react_1["default"].createElement(notistack_1.SnackbarProvider, { maxSnack: 3 },
                react_1["default"].createElement(AuthContext_1.AuthProvider, null,
                    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
                        react_1["default"].createElement(react_router_dom_1.Routes, null,
                            react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(LoginPage_1.LoginPage, null) }),
                            react_1["default"].createElement(react_router_dom_1.Route, { path: "/unauthorized", element: react_1["default"].createElement(Unauthorized_1.Unauthorized, null) }),
                            react_1["default"].createElement(react_router_dom_1.Route, { path: "/dashboard/owner", element: react_1["default"].createElement(PrivateRoute_1.PrivateRoute, { roles: [roles_1["default"].OWNER] },
                                    react_1["default"].createElement(TailAdminShell_1.TailAdminShell, null,
                                        react_1["default"].createElement(DashboardOwner_1.DashboardOwner, null))) }),
                            react_1["default"].createElement(react_router_dom_1.Route, { path: "/dashboard/supplier", element: react_1["default"].createElement(PrivateRoute_1.PrivateRoute, { roles: [roles_1["default"].ADMIN] },
                                    react_1["default"].createElement(TailAdminShell_1.TailAdminShell, null,
                                        react_1["default"].createElement(DashboardSupplier_1.DashboardSupplier, null))) }),
                            ListPages_1["default"].map(function (_a) {
                                var path = _a.path, Element = _a.Element, rl = _a.roles;
                                return (react_1["default"].createElement(react_router_dom_1.Route, { key: path, path: path, element: react_1["default"].createElement(PrivateRoute_1.PrivateRoute, { roles: rl },
                                        react_1["default"].createElement(TailAdminShell_1.TailAdminShell, null,
                                            react_1["default"].createElement(Element, null))) }));
                            }),
                            FormPages_1.formRoutes.map(function (_a) {
                                var path = _a.path, element = _a.element;
                                return (react_1["default"].createElement(react_router_dom_1.Route, { key: path, path: path, element: react_1["default"].createElement(TailAdminShell_1.TailAdminShell, null, element) }));
                            }),
                            react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(RoleRedirect, null) }))))))))); };
