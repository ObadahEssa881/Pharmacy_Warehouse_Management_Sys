import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMedicineDto, UpdateMedicineDto } from './dto';

@Injectable()
export class MedicineService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMedicineDto) {
    const medicine = await this.prisma.medicine.create({ data: dto });
    return { message: 'Medicine created successfully', data: medicine };
  }

  async findAll(page = 1, limit = 10) {
    const [data, total] = await this.prisma.$transaction([
      this.prisma.medicine.findMany({
        skip: (page - 1) * limit,
        take: limit,
        include: { category: true, company: true, supplier: true },
      }),
      this.prisma.medicine.count(),
    ]);

    return {
      message: 'Medicines retrieved successfully',
      data,
      meta: { total, page, limit },
    };
  }

  async findOne(id: number) {
    const medicine = await this.prisma.medicine.findUnique({ where: { id } });
    if (!medicine) throw new NotFoundException('Medicine not found');
    return { message: 'Medicine retrieved successfully', data: medicine };
  }

  async update(id: number, dto: UpdateMedicineDto) {
    const updated = await this.prisma.medicine.update({
      where: { id },
      data: dto,
    });
    return { message: 'Medicine updated successfully', data: updated };
  }

  async remove(id: number) {
    await this.prisma.medicine.delete({ where: { id } });
    return { message: 'Medicine deleted successfully' };
  }
}
