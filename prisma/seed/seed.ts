import { PrismaClient } from '@prisma/client';
import { seedCategories } from './category.seed';
import { seedCompanies } from './company.seed';
import { seedTypes } from './type.seed';
import { seedMedicines } from './medicine.seed';

const prisma = new PrismaClient();

async function main() {
  await seedCategories(prisma);npx 
  await seedCompanies(prisma);
  await seedMedicines(prisma);
  await seedTypes(prisma);
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
