"use strict";
exports.__esModule = true;
exports.formRoutes = void 0;
var CategoriesForm_1 = require("./CategoriesForm");
var CompaniesForm_1 = require("./CompaniesForm");
var InventoryForm_1 = require("./InventoryForm");
var InvoicesForm_1 = require("./InvoicesForm");
var MedicinesForm_1 = require("./MedicinesForm");
var NotificationsForm_1 = require("./NotificationsForm");
var PharmaciesForm_1 = require("./PharmaciesForm");
var PurchaseOrderItemsForm_1 = require("./PurchaseOrderItemsForm");
var PurchaseOrdersForm_1 = require("./PurchaseOrdersForm");
var SaleItemsForm_1 = require("./SaleItemsForm");
var SalesForm_1 = require("./SalesForm");
var UsersForm_1 = require("./UsersForm");
var WarehousesForm_1 = require("./WarehousesForm");
exports.formRoutes = [
    { path: '/users/create', element: React.createElement(UsersForm_1.UserCreate, null) },
    { path: '/users/:id/edit', element: React.createElement(UsersForm_1.UserEdit, null) },
    { path: '/pharmacies/create', element: React.createElement(PharmaciesForm_1.PharmacyCreate, null) },
    { path: '/pharmacies/:id/edit', element: React.createElement(PharmaciesForm_1.PharmacyEdit, null) },
    { path: '/warehouses/create', element: React.createElement(WarehousesForm_1.WarehouseCreate, null) },
    { path: '/warehouses/:id/edit', element: React.createElement(WarehousesForm_1.WarehouseEdit, null) },
    { path: '/categories/create', element: React.createElement(CategoriesForm_1.CategoryCreate, null) },
    { path: '/categories/:id/edit', element: React.createElement(CategoriesForm_1.CategoryEdit, null) },
    { path: '/companies/create', element: React.createElement(CompaniesForm_1.CompanyCreate, null) },
    { path: '/companies/:id/edit', element: React.createElement(CompaniesForm_1.CompanyEdit, null) },
    { path: '/medicines/create', element: React.createElement(MedicinesForm_1.MedicineCreate, null) },
    { path: '/medicines/:id/edit', element: React.createElement(MedicinesForm_1.MedicineEdit, null) },
    { path: '/inventory/create', element: React.createElement(InventoryForm_1.InventoryCreate, null) },
    { path: '/inventory/:id/edit', element: React.createElement(InventoryForm_1.InventoryEdit, null) },
    { path: '/purchase-orders/create', element: React.createElement(PurchaseOrdersForm_1.PurchaseOrderCreate, null) },
    { path: '/purchase-orders/:id/edit', element: React.createElement(PurchaseOrdersForm_1.PurchaseOrderEdit, null) },
    {
        path: '/purchase-order-items/create',
        element: React.createElement(PurchaseOrderItemsForm_1.PurchaseOrderItemCreate, null)
    },
    {
        path: '/purchase-order-items/:id/edit',
        element: React.createElement(PurchaseOrderItemsForm_1.PurchaseOrderItemEdit, null)
    },
    { path: '/invoices/create', element: React.createElement(InvoicesForm_1.InvoiceCreate, null) },
    { path: '/invoices/:id/edit', element: React.createElement(InvoicesForm_1.InvoiceEdit, null) },
    { path: '/sales/create', element: React.createElement(SalesForm_1.SaleCreate, null) },
    { path: '/sales/:id/edit', element: React.createElement(SalesForm_1.SaleEdit, null) },
    { path: '/sale-items/create', element: React.createElement(SaleItemsForm_1.SaleItemCreate, null) },
    { path: '/sale-items/:id/edit', element: React.createElement(SaleItemsForm_1.SaleItemEdit, null) },
    { path: '/notifications/create', element: React.createElement(NotificationsForm_1.NotificationCreate, null) },
    { path: '/notifications/:id/edit', element: React.createElement(NotificationsForm_1.NotificationEdit, null) },
];
