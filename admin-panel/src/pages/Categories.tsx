import { TwTable } from '../components/tw/Table';

export const CategoriesPage = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Categories</h1>
    <TwTable
      resource="categories"
      columns={[
        { source: 'id',          label: 'ID' },
        { source: 'name',        label: 'Name' },
        { source: 'description', label: 'Description' },
      ]}
    />
  </>
);
