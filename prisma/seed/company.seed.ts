import { PrismaClient } from '@prisma/client';

export async function seedCompanies(prisma: PrismaClient) {
  const companies = [
    'ميديكو',
    'شام شفا',
    'اسيا',
    'رادينس',
    'لوفاج',
    'دومنا',
    'ابن زهر',
    'دياموند فارما',
    'عطار',
    'olive',
    'حماه فارما',
    'الفا',
    'بحري مستورد',
    'Biocham',
    'ابن حيان',
    'Bahri',
    'قهوجي',
    'بيوغار',
    'ليبيرو',
    'MMT',
    'سياحي',
    'معتوق',
    'قنواتي',
    'Ultra Medica / الترا ميديكا',
    'اوغاريت',
    'يونيسيريا',
    'بركات',
    'هيومن فارما',
    'اكسسوار',
    'نورس',
    'ابن الهيثم',
    'ميديوتيك',
    'Avice',
    'jollydent',
    'يونايتد فارما',
    'الفارس',
    'linover',
    'zein',
    'تيتانيا',
    'سيفارما',
    'domina',
    'افاميا',
    'ماليزيا',
    'Unipharma',
  ];

  for (let i = 0; i < companies.length; i++) {
    const name = companies[i];
    await prisma.company.upsert({
      where: { name },
      update: {},
      create: {
        name,
        email: name.replace(/\s+/g, '').toLowerCase() + '@example.com',
        phone: '+20123456789',
        address: 'Cairo, Egypt',
      },
    });
  }

  console.log(`✅ Seeded ${companies.length} companies`);
}
