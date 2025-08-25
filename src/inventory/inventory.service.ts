import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
<<<<<<< Updated upstream
  create(createInventoryDto: CreateInventoryDto) {
    return 'This action adds a new inventory';
=======
  constructor(
    private prisma: PrismaService,
    private notifications: NotificationsService, // inject here
  ) {}

  // inventory.service.ts

  async findAll(user: UserJwtPayload, query: ListQueryDto) {
    const { skip, take } = buildPagination(query.page ?? 1, query.limit ?? 20);

    const baseWhere = ['PHARMACIST', 'PHARMACY_OWNER'].includes(user.role)
      ? { pharmacy_id: user.pharmacy_id }
      : { warehouse_id: user.warehouse_id };

    const where = {
      ...baseWhere,
      ...buildSearchOrWhere(query.search, ['medicine.name']), // example searchable field
      ...buildWhereFromFilter(query.filter ?? {}),
    };

    const select = buildSelect(query.select);
    const include = buildInclude(query.include);

    const [inventories, total] = await this.prisma.$transaction([
      this.prisma.inventory.findMany({
        skip,
        take,
        where,
        orderBy: buildOrderBy(query.sort) ?? { id: 'asc' },
        ...(select ? { select } : {}),
        ...(include
          ? { include: { medicine: true, ...include } }
          : { include: { medicine: true } }),
      }),
      this.prisma.inventory.count({ where }),
    ]);

    return {
      message: inventories.length
        ? 'Inventory fetched successfully'
        : 'No inventory found for this user.',
      data: inventories,
      meta: buildMeta(total, query.page ?? 1, query.limit ?? 20),
    };
>>>>>>> Stashed changes
  }

  findAll() {
    return `This action returns all inventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
