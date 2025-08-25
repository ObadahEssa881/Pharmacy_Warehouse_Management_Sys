export type Operator =
  | 'eq'
  | 'ne'
  | 'contains'
  | 'startsWith'
  | 'endsWith'
  | 'in'
  | 'nin'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'between'
  | 'is'; // null / not null

export type FieldFilter =
  | { op: Operator; value?: any }
  | { op: 'between'; value: [any, any] }
  | { op: 'is'; value: 'null' | 'notNull' };

export type FilterObject = Record<string, FieldFilter>;
