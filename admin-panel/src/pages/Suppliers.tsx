import { TwTable } from '../components/tw/Table';

export const SuppliersPage = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Suppliers</h1>
    <TwTable
      resource="suppliers"
      columns={[
        { source: 'id',            label: 'ID' },
        { source: 'name',          label: 'Name' },
        { source: 'email',         label: 'Email' },
        { source: 'role',          label: 'Role' },
        { source: 'contact_person',label: 'Contact' },
        { source: 'phone',         label: 'Phone' },
        { source: 'warehouseId',   label: 'Warehouse' },
      ]}
    />
  </>
);
