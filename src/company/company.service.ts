import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { buildMeta, buildPagination } from 'src/common/query/pagination';
import {
  buildInclude,
  buildOrderBy,
  buildSearchOrWhere,
  buildSelect,
  buildWhereFromFilter,
} from 'src/common/query/query-builder';
import { ListQueryDto } from 'src/common/query/list-query.dto';

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

  async findAll(query: ListQueryDto) {
    const { skip, take } = buildPagination(query.page ?? 1, query.limit ?? 20);

    const where = {
      ...buildSearchOrWhere(query.search, ['name']),
      ...buildWhereFromFilter(query.filter ?? {}),
    };

    const select = buildSelect(query.select);
    const include = buildInclude(query.include);

    const [companies, total] = await this.prisma.$transaction([
      this.prisma.company.findMany({
        skip,
        take,
        where,
        orderBy: buildOrderBy(query.sort) ?? { id: 'asc' },
        ...(select ? { select } : {}),
        ...(include ? { include } : {}),
      }),
      this.prisma.company.count({ where }),
    ]);

    return {
      message: companies.length
        ? 'Companies fetched successfully'
        : 'No companies found.',
      data: companies,
      meta: buildMeta(total, query.page ?? 1, query.limit ?? 20),
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
  async getMedicinesByCompany(
    companyId: number,
    page: number = 1,
    limit: number = 10,
  ) {
    const skip = (page - 1) * limit;

    const [medicines, total] = await this.prisma.$transaction([
      this.prisma.medicine.findMany({
        where: { company_id: companyId },
        skip,
        take: limit,
        include: {
          category: true,
          supplier: true,
        },
      }),
      this.prisma.medicine.count({ where: { company_id: companyId } }),
    ]);

    return {
      message: medicines.length
        ? 'Medicines fetched successfully'
        : 'No medicines found.',
      data: medicines,
      meta: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }
}
