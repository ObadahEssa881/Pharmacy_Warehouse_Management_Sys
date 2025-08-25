import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';

type Delegate<T> = {
  findMany: (args?: any) => Promise<T[]>;
  findUnique: (args: any) => Promise<T | null>;
  create: (args: any) => Promise<T>;
  update: (args: any) => Promise<T>;
  delete: (args: any) => Promise<T>;
};

@Injectable()
export class BaseCrudService<T> {
  private delegate: Delegate<T>;

  constructor(
    protected readonly prisma: PrismaService,
    protected readonly model: keyof PrismaClient,
  ) {
    // Force TypeScript to treat it as a proper Prisma delegate
    this.delegate = this.prisma[this.model] as unknown as Delegate<T>;
  }

  async findMany(params?: any): Promise<T[]> {
    return this.delegate.findMany(params ?? {});
  }

  async findOne(params: any): Promise<T | null> {
    return this.delegate.findUnique(params ?? {});
  }

  async create(data: any): Promise<T> {
    return this.delegate.create({ data });
  }

  async update(params: any, data: any): Promise<T> {
    return this.delegate.update({ where: params, data });
  }

  async delete(params: any): Promise<T> {
    return this.delegate.delete({ where: params });
  }
}
