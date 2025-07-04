import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth/AuthContext';
import { PrivateRoute } from './auth/PrivateRoute';
import { LoginPage } from './pages/LoginPage';

import { TailAdminShell } from './components/TailAdminShell';

// Dashboard pages
import { DashboardOwner } from './pages/DashboardOwner';
import { DashboardSupplier } from './pages/DashboardSupplier';
import { Unauthorized } from './pages/Unauthorized';

// Resource pages
import { UsersPage } from './pages/Users';
import { PharmaciesPage } from './pages/Pharmacies';
import { WarehousesPage } from './pages/Warehouses';
import { SuppliersPage } from './pages/Suppliers';
import { CategoriesPage } from './pages/Categories';
import { CompaniesPage } from './pages/Companies';
import { MedicinesPage } from './pages/Medicines';
import { InventoryPage } from './pages/Inventory';
import { PurchaseOrdersPage } from './pages/PurchaseOrders';
import { PurchaseOrderItemsPage } from './pages/PurchaseOrderItems';
import { InvoicesPage } from './pages/Invoices';
import { SalesPage } from './pages/Sales';
import { SaleItemsPage } from './pages/SaleItems';
import { NotificationsPage } from './pages/Notifications';

const RoleRedirect = () => {
  const { role } = useAuth();
  if (role === 'PHARMACY_OWNER')   return <Navigate to="/dashboard/owner" />;
  if (role === 'SUPPLIER_ADMIN')   return <Navigate to="/dashboard/supplier" />;
  return <Navigate to="/login" />;
};

export const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* public */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* dashboards */}
        <Route
          path="/dashboard/owner"
          element={
            <PrivateRoute roles={['PHARMACY_OWNER']}>
              <TailAdminShell><DashboardOwner /></TailAdminShell>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/supplier"
          element={
            <PrivateRoute roles={['SUPPLIER_ADMIN']}>
              <TailAdminShell><DashboardSupplier /></TailAdminShell>
            </PrivateRoute>
          }
        />

        {/* resources — both roles unless otherwise noted */}
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><UsersPage /></TailAdminShell></PrivateRoute>}           path="/users" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><PharmaciesPage /></TailAdminShell></PrivateRoute>}     path="/pharmacies" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><WarehousesPage /></TailAdminShell></PrivateRoute>}     path="/warehouses" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><SuppliersPage /></TailAdminShell></PrivateRoute>}      path="/suppliers" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><CategoriesPage /></TailAdminShell></PrivateRoute>}     path="/categories" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER']}><TailAdminShell><CompaniesPage /></TailAdminShell></PrivateRoute>}                       path="/companies" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><MedicinesPage /></TailAdminShell></PrivateRoute>}      path="/medicines" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><InventoryPage /></TailAdminShell></PrivateRoute>}      path="/inventory" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><PurchaseOrdersPage /></TailAdminShell></PrivateRoute>} path="/purchase-orders" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><PurchaseOrderItemsPage /></TailAdminShell></PrivateRoute>} path="/purchase-order-items" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><InvoicesPage /></TailAdminShell></PrivateRoute>}        path="/invoices" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER']}><TailAdminShell><SalesPage /></TailAdminShell></PrivateRoute>}                            path="/sales" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER']}><TailAdminShell><SaleItemsPage /></TailAdminShell></PrivateRoute>}                       path="/sale-items" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><NotificationsPage /></TailAdminShell></PrivateRoute>} path="/notifications" />

        {/* default */}
        <Route path="*" element={<RoleRedirect />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
