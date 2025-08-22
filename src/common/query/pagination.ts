export function buildPagination(page = 1, limit = 20) {
  const take = Math.max(1, Math.min(limit, 200));
  const skip = (Math.max(1, page) - 1) * take;
  return { skip, take };
}

export function buildMeta(total: number, page: number, limit: number) {
  const pages = Math.max(1, Math.ceil(total / Math.max(1, limit)));
  return {
    total,
    page,
    limit,
    pages,
    hasNext: page < pages,
    hasPrev: page > 1,
  };
}
