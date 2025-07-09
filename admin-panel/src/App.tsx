import { Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider, useAuth } from './auth/AuthContext';
import { PrivateRoute } from './auth/PrivateRoute';
import { LoginPage } from './pages/LoginPage';
import { dataProvider } from './dataProvider';
import { TailAdminShell } from './components/TailAdminShell';

// Dashboard pages
import { DashboardOwner } from './pages/DashboardOwner';
import { DashboardSupplier } from './pages/DashboardSupplier';
import { Unauthorized } from './pages/Unauthorized';
import { AdminContext } from 'react-admin';
// Resource pages
import { UsersList } from './pages/UsersList';
import { PharmaciesList } from './pages/PharmaciesList';
import { WarehousesList } from './pages/WarehousesList';
import { SuppliersList } from './pages/SuppliersList';
import { CategoriesList } from './pages/CategoriesList';
import { CompaniesList } from './pages/CompaniesList';
import { MedicinesList } from './pages/MedicinesList';
import { InventoryList } from './pages/InventoryList';
import { PurchaseOrdersList } from './pages/PurchaseOrdersList';
import { PurchaseOrderItemsList } from './pages/PurchaseOrderItemsList';
import { InvoicesList } from './pages/InvoicesList';
import { SalesList } from './pages/SalesList';
import { SaleItemsList } from './pages/SaleItemsList';
import { NotificationsList } from './pages/NotificationsList';

const RoleRedirect = () => {
  const { role } = useAuth();
  if (role === 'PHARMACY_OWNER')   return <Navigate to="/dashboard/owner" />;
  if (role === 'SUPPLIER_ADMIN')   return <Navigate to="/dashboard/supplier" />;
  return <Navigate to="/login" />;
};

const queryClient = new QueryClient();

export const App = () => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <AdminContext dataProvider={dataProvider}>
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
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><UsersList /></TailAdminShell></PrivateRoute>}           path="/users" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><PharmaciesList /></TailAdminShell></PrivateRoute>}     path="/pharmacies" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><WarehousesList /></TailAdminShell></PrivateRoute>}     path="/warehouses" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><SuppliersList /></TailAdminShell></PrivateRoute>}      path="/suppliers" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><CategoriesList /></TailAdminShell></PrivateRoute>}     path="/categories" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER']}><TailAdminShell><CompaniesList /></TailAdminShell></PrivateRoute>}                       path="/companies" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><MedicinesList /></TailAdminShell></PrivateRoute>}      path="/medicines" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><InventoryList /></TailAdminShell></PrivateRoute>}      path="/inventory" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><PurchaseOrdersList /></TailAdminShell></PrivateRoute>} path="/purchase-orders" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><PurchaseOrderItemsList /></TailAdminShell></PrivateRoute>} path="/purchase-order-items" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><InvoicesList /></TailAdminShell></PrivateRoute>}        path="/invoices" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER']}><TailAdminShell><SalesList /></TailAdminShell></PrivateRoute>}                            path="/sales" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER']}><TailAdminShell><SaleItemsList /></TailAdminShell></PrivateRoute>}                       path="/sale-items" />
        <Route element={<PrivateRoute roles={['PHARMACY_OWNER','SUPPLIER_ADMIN']}><TailAdminShell><NotificationsList /></TailAdminShell></PrivateRoute>} path="/notifications" />

        {/* default */}
        <Route path="*" element={<RoleRedirect />} />
      </Routes>
    </AdminContext>
  </QueryClientProvider>
  </AuthProvider>
);
