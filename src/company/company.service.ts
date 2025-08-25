import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
@Injectable()
export class CompanyService {

  constructor(
    private prisma: PrismaService,
  ) {}
  create(createCompanyDto: CreateCompanyDto) {
    return 'This action adds a new company';
  }

  async findAll() {

<<<<<<< Updated upstream
    const companies = await this.prisma.company.findMany();
    return companies;
=======
    const where = {
      ...buildSearchOrWhere(query.search, ['name' , 'phone' , 'email' , 'address' , 'contact_person']),
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
>>>>>>> Stashed changes
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
