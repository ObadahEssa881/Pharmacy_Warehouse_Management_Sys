"use strict";
exports.__esModule = true;
// src/pages/ListPages.tsx
var UsersList_1 = require("./UsersList");
var PharmaciesList_1 = require("./PharmaciesList");
var WarehousesList_1 = require("./WarehousesList");
var SuppliersList_1 = require("./SuppliersList");
var CategoriesList_1 = require("./CategoriesList");
var CompaniesList_1 = require("./CompaniesList");
var MedicinesList_1 = require("./MedicinesList");
var InventoryList_1 = require("./InventoryList");
var PurchaseOrdersList_1 = require("./PurchaseOrdersList");
var PurchaseOrderItemsList_1 = require("./PurchaseOrderItemsList");
var InvoicesList_1 = require("./InvoicesList");
var SalesList_1 = require("./SalesList");
var SaleItemsList_1 = require("./SaleItemsList");
var NotificationsList_1 = require("./NotificationsList");
// ... import the rest
var OWNER_OR_ADMIN = ['PHARMACY_OWNER', 'SUPPLIER_ADMIN'];
var OWNER = ['PHARMACY_OWNER'];
var ADMIN = ['SUPPLIER_ADMIN'];
exports["default"] = [
    { path: '/users', Element: UsersList_1.UsersList, roles: OWNER_OR_ADMIN },
    { path: '/pharmacies', Element: PharmaciesList_1.PharmaciesList, roles: OWNER_OR_ADMIN },
    { path: '/warehouses', Element: WarehousesList_1.WarehousesList, roles: OWNER_OR_ADMIN },
    { path: '/suppliers', Element: SuppliersList_1.SuppliersList, roles: OWNER_OR_ADMIN },
    { path: '/categories', Element: CategoriesList_1.CategoriesList, roles: OWNER_OR_ADMIN },
    { path: '/companies', Element: CompaniesList_1.CompaniesList, roles: OWNER },
    { path: '/medicines', Element: MedicinesList_1.MedicinesList, roles: OWNER_OR_ADMIN },
    { path: '/inventory', Element: InventoryList_1.InventoryList, roles: OWNER_OR_ADMIN },
    {
        path: '/purchase-orders',
        Element: PurchaseOrdersList_1.PurchaseOrdersList,
        roles: OWNER_OR_ADMIN
    },
    {
        path: '/purchase-order-items',
        Element: PurchaseOrderItemsList_1.PurchaseOrderItemsList,
        roles: OWNER_OR_ADMIN
    },
    { path: '/invoices', Element: InvoicesList_1.InvoicesList, roles: OWNER_OR_ADMIN },
    { path: '/sales', Element: SalesList_1.SalesList, roles: OWNER },
    { path: '/sale-items', Element: SaleItemsList_1.SaleItemsList, roles: OWNER },
    { path: '/notifications', Element: NotificationsList_1.NotificationsList, roles: OWNER_OR_ADMIN },
];
