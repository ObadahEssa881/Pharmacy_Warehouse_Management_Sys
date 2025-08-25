// src/pages/ListPages.tsx
import { UsersList } from './UsersList';
import { PharmaciesList } from './PharmaciesList';
import { WarehousesList } from './WarehousesList';
import { SuppliersList } from './SuppliersList';
import { CategoriesList } from './CategoriesList';
import { CompaniesList } from './CompaniesList';
import { MedicinesList } from './MedicinesList';
import { InventoryList } from './InventoryList';
import { PurchaseOrdersList } from './PurchaseOrdersList';
import { PurchaseOrderItemsList } from './PurchaseOrderItemsList';
import { InvoicesList } from './InvoicesList';
import { SalesList } from './SalesList';
import { SaleItemsList } from './SaleItemsList';
import { NotificationsList } from './NotificationsList';
// ... import the rest

const OWNER_OR_ADMIN = ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'];
const OWNER = ['PHARMACY_OWNER'];
const ADMIN = ['SUPPLIER_ADMIN'];

export default [
  { path: '/users', Element: UsersList, roles: OWNER_OR_ADMIN },
  { path: '/pharmacies', Element: PharmaciesList, roles: OWNER_OR_ADMIN },
  { path: '/warehouses', Element: WarehousesList, roles: OWNER_OR_ADMIN },
  { path: '/suppliers', Element: SuppliersList, roles: OWNER_OR_ADMIN },
  { path: '/categories', Element: CategoriesList, roles: OWNER_OR_ADMIN },
  { path: '/companies', Element: CompaniesList, roles: OWNER },
  { path: '/medicines', Element: MedicinesList, roles: OWNER_OR_ADMIN },
  { path: '/inventory', Element: InventoryList, roles: OWNER_OR_ADMIN },
  {
    path: '/purchase-orders',
    Element: PurchaseOrdersList,
    roles: OWNER_OR_ADMIN,
  },
  {
    path: '/purchase-order-items',
    Element: PurchaseOrderItemsList,
    roles: OWNER_OR_ADMIN,
  },
  { path: '/invoices', Element: InvoicesList, roles: OWNER_OR_ADMIN },
  { path: '/sales', Element: SalesList, roles: OWNER },
  { path: '/sale-items', Element: SaleItemsList, roles: OWNER },
  { path: '/notifications', Element: NotificationsList, roles: OWNER_OR_ADMIN },
];
