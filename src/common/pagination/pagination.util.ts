// src/common/pagination/pagination.util.ts
import { PaginationDto } from './pagination.dto';

export const buildPagination = (p: PaginationDto) => {
  const page = p.page ?? 1; // fallback to 1
  const limit = p.limit ?? 10; // fallback to 10

  return {
    skip: (page - 1) * limit,
    take: limit,
  };
};
