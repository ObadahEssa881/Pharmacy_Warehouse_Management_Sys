import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    const users = await this.prisma.user.findMany();
    if (!users) {
      return 'there is no users to show';
    }
    return users;
  }

  async findOne(email: string) {
    const users = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!users) {
      return 'not found please verify credintials';
    }
    return users;
  }

  async remove(email: string) {
    const users = await this.prisma.user.delete({
      where: {
        email: email,
      },
    });
    if (!users) {
      return 'not found please verify credintials';
    }
    return `the user ${email} deleted`;
  }
}
