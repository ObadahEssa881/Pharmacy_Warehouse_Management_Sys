import { CategoryCreate, CategoryEdit } from './CategoriesForm';
import { CompanyCreate, CompanyEdit } from './CompaniesForm';
import { InventoryCreate, InventoryEdit } from './InventoryForm';
import { InvoiceCreate, InvoiceEdit } from './InvoicesForm';
import { MedicineCreate, MedicineEdit } from './MedicinesForm';
import { NotificationCreate, NotificationEdit } from './NotificationsForm';
import { PharmacyCreate, PharmacyEdit } from './PharmaciesForm';
import {
  PurchaseOrderItemCreate,
  PurchaseOrderItemEdit,
} from './PurchaseOrderItemsForm';
import { PurchaseOrderCreate, PurchaseOrderEdit } from './PurchaseOrdersForm';
import { SaleItemCreate, SaleItemEdit } from './SaleItemsForm';
import { SaleCreate, SaleEdit } from './SalesForm';
import { UserCreate, UserEdit } from './UsersForm';
import { WarehouseCreate, WarehouseEdit } from './WarehousesForm';

export const formRoutes = [
  { path: '/users/create', element: <UserCreate /> },
  { path: '/users/:id/edit', element: <UserEdit /> },
  { path: '/pharmacies/create', element: <PharmacyCreate /> },
  { path: '/pharmacies/:id/edit', element: <PharmacyEdit /> },
  { path: '/warehouses/create', element: <WarehouseCreate /> },
  { path: '/warehouses/:id/edit', element: <WarehouseEdit /> },
  { path: '/categories/create', element: <CategoryCreate /> },
  { path: '/categories/:id/edit', element: <CategoryEdit /> },
  { path: '/companies/create', element: <CompanyCreate /> },
  { path: '/companies/:id/edit', element: <CompanyEdit /> },
  { path: '/medicines/create', element: <MedicineCreate /> },
  { path: '/medicines/:id/edit', element: <MedicineEdit /> },
  { path: '/inventory/create', element: <InventoryCreate /> },
  { path: '/inventory/:id/edit', element: <InventoryEdit /> },
  { path: '/purchase-orders/create', element: <PurchaseOrderCreate /> },
  { path: '/purchase-orders/:id/edit', element: <PurchaseOrderEdit /> },
  {
    path: '/purchase-order-items/create',
    element: <PurchaseOrderItemCreate />,
  },
  {
    path: '/purchase-order-items/:id/edit',
    element: <PurchaseOrderItemEdit />,
  },
  { path: '/invoices/create', element: <InvoiceCreate /> },
  { path: '/invoices/:id/edit', element: <InvoiceEdit /> },
  { path: '/sales/create', element: <SaleCreate /> },
  { path: '/sales/:id/edit', element: <SaleEdit /> },
  { path: '/sale-items/create', element: <SaleItemCreate /> },
  { path: '/sale-items/:id/edit', element: <SaleItemEdit /> },
  { path: '/notifications/create', element: <NotificationCreate /> },
  { path: '/notifications/:id/edit', element: <NotificationEdit /> },
];
