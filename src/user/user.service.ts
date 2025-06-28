import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

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

  async findOne(id: number) {
    const users = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!users) {
      return new NotFoundException('User not found');
    }
    return users;
  }

  async remove(id: number) {
    const users = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    if (!users) {
      return new NotFoundException('not found please verify credintials');
    }
    return `the user ${id} deleted`;
  }

  async update(id: number, dto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        username: dto.username,
        email: dto.email,
        role: dto.role,
        pharmacy_id: dto.pharmacy_id,
      },
    });
  }
}
