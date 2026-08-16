# Pharmacy Warehouse Management System

A NestJS REST API for pharmacy and warehouse operations — inventory, purchasing, sales, invoicing and reporting — built as a graduation project at the University of Damascus.

**Author:** [Obadah AboEssa](https://www.linkedin.com/in/obadah-abo-essa) · **Stack:** TypeScript · NestJS · PostgreSQL · Prisma

The Laravel/Filament admin panel lives in a companion repository: [filament-pharmacy-management-sys](https://github.com/ObadahEssa881/filament-pharmacy-management-sys).

---

## Overview

Pharmacies and their supplying warehouses run on stock accuracy. This service models the whole chain — a supplier's warehouse, a pharmacy's shelf inventory, purchase orders between them, and the sales that draw stock down — behind a single typed REST API with role-based access control.

**15 Prisma models across 16 feature modules**, organised so each domain owns its controller, service, DTOs and entities.

## Features

| Area | What it covers |
|---|---|
| **Inventory** | Stock levels per location (pharmacy or warehouse), batch tracking, low-stock signals |
| **Medicine catalog** | Medicines, categories and manufacturing companies |
| **Purchasing** | Purchase orders and line items between pharmacies and suppliers |
| **Sales** | Sales, sale items and invoice generation |
| **Suppliers** | Supplier records with their own role model |
| **Reporting** | Operational reports across inventory, sales and purchasing |
| **Notifications** | In-app notifications with device token registration |
| **Auth** | JWT authentication, Passport strategies, guards and role decorators |

## Architecture

```
src/
├── auth/           JWT strategy, guards, role decorators, DTOs
├── common/         Base classes, pagination, query builders, response envelope, enums
├── config/         Environment and application configuration
├── filters/        Global exception filters
├── prisma/         Prisma service and module
│
├── user/           Users and roles
├── company/        Manufacturing companies
├── medicine/       Medicine catalog and categories
├── warehouse/      Warehouse locations
├── inventory/      Stock per location
├── supplier/       Suppliers
├── purchase/       Purchase orders and items
├── sale/           Sales and sale items
├── invoice/        Invoicing
├── report/         Reporting
└── notification/   Notifications and device tokens
```

**Cross-cutting concerns are centralised** rather than repeated per module: a shared response envelope, a pagination helper, a reusable query builder, global exception filters, and guards driven by role decorators.

### Data model

`User` · `Pharmacy` · `Warehouse` · `Supplier` · `Category` · `Company` · `Medicine` · `Inventory` · `PurchaseOrder` · `PurchaseOrderItem` · `Invoice` · `Sale` · `SaleItem` · `Notification` · `NotificationToken`

Enums: `UserRole`, `SupplierRole`, `LocationType`.

## Access control

JWT authentication with route-level RBAC. Roles are declared per handler with a custom decorator and enforced by a guard, so permissions live next to the routes they protect rather than in a central switch.

## Running locally

Requires Node.js 18+, PostgreSQL and npm.

```bash
git clone https://github.com/ObadahEssa881/Pharmacy_Warehouse_Management_Sys.git
cd Pharmacy_Warehouse_Management_Sys
npm install
```

Create a `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/pharmacy"
JWT_SECRET="your-secret"
JWT_EXPIRES_IN="15m"
PORT=3000
```

Then:

```bash
npx prisma migrate deploy
npx prisma generate
npm run start:dev
```

## Tests

```bash
npm run test        # unit
npm run test:e2e    # end-to-end
npm run test:cov    # coverage
```

## License

MIT
