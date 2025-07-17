import {
  PrismaClient,
  UserRole,
  SupplierRole,
  LocationType,
} from '@prisma/client';
import { seedCategories } from './category.seed';
import { seedCompanies } from './company.seed';
import { seedMedicines } from './medicine.seed';
import * as argon from 'argon2';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  // Pharmacies
  const pharmacy1 = await prisma.pharmacy.create({
    data: {
      name: 'Central Pharmacy',
      address: '123 Main St',
      contact_number: '123456789',
    },
  });

  // Users
  const passwordHash = await argon.hash('password123');
  await prisma.user.createMany({
    data: [
      {
        username: 'owner1',
        email: 'owner1@pharma.com',
        password_hash: passwordHash,
        role: UserRole.PHARMACY_OWNER,
        pharmacy_id: pharmacy1.id,
      },
      {
        username: 'pharmacist1',
        email: 'pharmacist1@pharma.com',
        password_hash: passwordHash,
        role: UserRole.PHARMACIST,
        pharmacy_id: pharmacy1.id,
      },
    ],
  });

  // Warehouses
  const warehouse1 = await prisma.warehouse.create({
    data: {
      name: 'Main Warehouse',
      address: '456 Warehouse Rd',
      contact_number: '987654321',
    },
  });

  // Supplier
  const supplier1 = await prisma.supplier.create({
    data: {
      name: 'Best Supplier',
      email: 'supplier@warehouse.com',
      password_hash: passwordHash,
      role: SupplierRole.SUPPLIER_ADMIN,
      contact_person: 'John Doe',
      phone: '555555555',
      address: '789 Supplier Ave',
      warehouseId: warehouse1.id,
    },
  });

  // Categories & Companies
  const category = await prisma.category.create({
    data: { name: 'Painkillers', description: 'Pain relief medicines' },
  });

  const company = await prisma.company.create({
    data: {
      name: 'HealthCorp',
      contact_person: 'Alice',
      phone: '444444444',
      email: 'contact@healthcorp.com',
      address: '101 Pharma St',
    },
  });

  // Medicines
  const medicine1 = await prisma.medicine.create({
    data: {
      name: 'Paracetamol',
      titer: '500mg',
      category_id: category.id,
      company_id: company.id,
      unit_price: 5.0,
      supplier_id: supplier1.id,
      Type: 'Tablet',
    },
  });

  // Inventory
  await prisma.inventory.create({
    data: {
      medicine_id: medicine1.id,
      location_type: LocationType.PHARMACY,
      quantity: 100,
      cost_price: 3.5,
      selling_price: 5.0,
      expiry_date: new Date('2026-12-31'),
      pharmacy_id: pharmacy1.id,
    },
  });

  // Purchase Order
  await prisma.purchaseOrder.create({
    data: {
      supplier_id: supplier1.id,
      pharmacy_id: pharmacy1.id,
      status: 'DELIVERED',
      PurchaseOrderItems: {
        create: [{ medicine_id: medicine1.id, quantity: 50, unit_price: 3.5 }],
      },
    },
  });

  // Sale
  await prisma.sale.create({
    data: {
      pharmacy_id: pharmacy1.id,
      customer_name: 'Jane Doe',
      total_amount: 50.0,
      payment_mode: 'CASH',
      SaleItems: {
        create: [
          {
            medicine_id: medicine1.id,
            quantity: 10,
            unit_price: 5.0,
            cost_price: 3.5,
          },
        ],
      },
    },
  });

  console.log('✅ Seeding completed!');
  await seedCategories(prisma);
  await seedCompanies(prisma);
  await seedMedicines(prisma);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
