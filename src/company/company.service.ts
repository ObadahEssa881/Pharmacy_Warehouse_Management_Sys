import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCompanyDto) {
    try {
      const created = await this.prisma.company.create({ data: dto });
      return {
        message: 'Company created successfully',
        data: created,
      };
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new BadRequestException('Error creating company: ' + error.message);
    }
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const [companies, total] = await Promise.all([
      this.prisma.company.findMany({
        skip,
        take: limit,
        orderBy: { id: 'asc' },
      }),
      this.prisma.company.count(),
    ]);

    return {
      message: 'Companies fetched successfully',
      data: companies,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: number) {
    const company = await this.prisma.company.findUnique({ where: { id } });
    if (!company)
      throw new NotFoundException(`Company with id ${id} not found`);

    return {
      message: 'Company fetched successfully',
      data: company,
    };
  }

  async update(id: number, dto: UpdateCompanyDto) {
    const existing = await this.prisma.company.findUnique({ where: { id } });
    if (!existing)
      throw new NotFoundException(`Company with id ${id} not found`);

    const updated = await this.prisma.company.update({
      where: { id },
      data: dto,
    });

    return {
      message: 'Company updated successfully',
      data: updated,
    };
  }

  async remove(id: number) {
    const existing = await this.prisma.company.findUnique({ where: { id } });
    if (!existing)
      throw new NotFoundException(`Company with id ${id} not found`);

    await this.prisma.company.delete({ where: { id } });
    return {
      message: `Company with id ${id} deleted successfully`,
    };
  }
}
