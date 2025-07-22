"use strict";
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { SnackbarProvider } from 'notistack';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { AdminContext } from 'react-admin';
exports.__esModule = true;
// import { AuthProvider, useAuth } from './auth/AuthContext';
// import { PrivateRoute } from './auth/PrivateRoute';
// import { LoginPage } from './pages/LoginPage';
// import { Unauthorized } from './pages/Unauthorized';
// import { DashboardOwner } from './pages/DashboardOwner';
// import { DashboardSupplier } from './pages/DashboardSupplier';
// import { TailAdminShell } from './components/TailAdminShell';
// import roles from './auth/roles';
// import { dataProvider } from './dataProvider';
// import { authProvider } from './auth/AuthProvider';
// import ListPages from './pages/ListPages';
// import { formRoutes } from './pages/FormPages';
// const theme = createTheme({
//   palette: { mode: 'light', primary: { main: '#1976d2' } },
// });
// const queryClient = new QueryClient();
// const RoleRedirect = () => {
//   const { role } = useAuth();
//   if (role === roles.OWNER) return <Navigate to="/dashboard/owner" />;
//   if (role === roles.ADMIN) return <Navigate to="/dashboard/supplier" />;
//   return <Navigate to="/login" />;
// };
// export const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <AdminContext dataProvider={dataProvider} authProvider={authProvider}>
//       <ThemeProvider theme={theme}>
//         <SnackbarProvider maxSnack={3}>
//           <AuthProvider>
//             <BrowserRouter>
//               <Routes>
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/unauthorized" element={<Unauthorized />} />
//                 {/* Dashboards */}
//                 <Route
//                   path="/dashboard/owner"
//                   element={
//                     <PrivateRoute roles={[roles.OWNER]}>
//                       <TailAdminShell>
//                         <DashboardOwner />
//                       </TailAdminShell>
//                     </PrivateRoute>
//                   }
//                 />
//                 <Route
//                   path="/dashboard/supplier"
//                   element={
//                     <PrivateRoute roles={[roles.ADMIN]}>
//                       <TailAdminShell>
//                         <DashboardSupplier />
//                       </TailAdminShell>
//                     </PrivateRoute>
//                   }
//                 />
//                 {/* Resource List Pages */}
//                 {ListPages.map(({ path, Element, roles: rl }) => (
//                   <Route
//                     key={path}
//                     path={path}
//                     element={
//                       <PrivateRoute roles={rl}>
//                         <TailAdminShell>
//                           <Element />
//                         </TailAdminShell>
//                       </PrivateRoute>
//                     }
//                   />
//                 ))}
//                 {/* Create/Edit Pages */}
//                 {formRoutes.map(({ path, element }) => (
//                   <Route
//                     key={path}
//                     path={path}
//                     element={<TailAdminShell>{element}</TailAdminShell>}
//                   />
//                 ))}
//                 <Route path="*" element={<RoleRedirect />} />
//               </Routes>
//             </BrowserRouter>
//           </AuthProvider>
//         </SnackbarProvider>
//       </ThemeProvider>
//     </AdminContext>
//   </QueryClientProvider>
// );
var react_admin_1 = require("react-admin");
var AuthProvider_1 = require("./auth/AuthProvider");
var dataProvider_1 = require("./data/dataProvider");
var Dashboard_1 = require("./pages/Dashboard");
var MedicinesList_1 = require("./resources/medicines/MedicinesList");
var PurchaseOrdersList_1 = require("./resources/purchase-orders/PurchaseOrdersList");
var ProfitLossReport_1 = require("./resources/reports/ProfitLossReport");
function App() {
    var role = localStorage.getItem('role');
    return (React.createElement(react_admin_1.Admin, { dashboard: Dashboard_1["default"], authProvider: AuthProvider_1.authProvider, dataProvider: dataProvider_1.dataProvider },
        React.createElement(react_admin_1.Resource, { name: "medicines", list: MedicinesList_1.MedicinesList }),
        role === 'PHARMACY_OWNER' && (React.createElement(React.Fragment, null,
            React.createElement(react_admin_1.Resource, { name: "purchase-orders", list: PurchaseOrdersList_1.PurchaseOrdersList }),
            React.createElement(react_admin_1.Resource, { name: "reports/profit-loss", list: ProfitLossReport_1["default"] })))));
}
exports["default"] = App;
