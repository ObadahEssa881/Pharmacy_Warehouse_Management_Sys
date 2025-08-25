import { Prisma } from '@prisma/client';

/**
 * Build Prisma where clause for free-text search.
 * @param search - string from query param ?search=...
 * @param searchableFields - list of fields to search in
 */
export function buildSearchOrWhere(
  search?: string,
  searchableFields: string[] = [],
): Prisma.PrismaClientKnownRequestError | object | undefined {
  if (!search || searchableFields.length === 0) return undefined;

  const cleanSearch = search.replace(/^"|"$/g, '');

  return {
    OR: searchableFields.map((field) => {
      if(field.includes('.')){
        const [relation , subfield] = field.split('.');
        return {
          [relation]:{
            [subfield] :{
              contains: cleanSearch
            } ,
          },
        };
      }
      return {
        [field]: {
          contains: cleanSearch,
          // mode: 'insensitive',
        },
      }
    }),
  };
}

/**
 * Build where filter from key=value query params
 */
export function buildWhereFromFilter(filters: Record<string, any>): object {
  const where: Record<string, any> = {};
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      where[key] = value;
    }
  });
  return where;
}

/**
 * Build orderBy clause from ?sort=field:asc
 */
export function buildOrderBy(sort?: string): object | undefined {
  if (!sort) return undefined;

  const [field, order] = sort.split(':');
  return {
    [field]: order === 'desc' ? 'desc' : 'asc',
  };
}

/**
 * Build include clause for relations (?include=pharmacy,warehouse)
 */
export function buildInclude(include?: string): object | undefined {
  if (!include) return undefined;

  const relations = include.split(',');
  return relations.reduce(
    (acc, relation) => {
      acc[relation] = true;
      return acc;
    },
    {} as Record<string, boolean>,
  );
}

/**
 * Build select clause for picking fields (?select=id,name,email)
 */
export function buildSelect(select?: string): object | undefined {
  if (!select) return undefined;

  const fields = select.split(',');
  return fields.reduce(
    (acc, field) => {
      acc[field] = true;
      return acc;
    },
    {} as Record<string, boolean>,
  );
}
