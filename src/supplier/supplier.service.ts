import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SupplierService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    const supplier = await this.prisma.supplier.findMany();
    if (!supplier) {
      return 'there is no users to show';
    }
    return supplier;
  }

  async findOne(email: string) {
    const supplier = await this.prisma.supplier.findUnique({
      where: {
        email: email,
      },
    });
    if (!supplier) {
      return 'not found please verify credintials';
    }
    return supplier;
  }

  async remove(email: string) {
    const supplier = await this.prisma.supplier.delete({
      where: {
        email: email,
      },
    });
    if (!supplier) {
      return 'not found please verify credintials';
    }
    return `the user ${email} deleted`;
  }
}
