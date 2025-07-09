import { TwTable } from '../components/tw/Table';

export const WarehousesList = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Warehouses</h1>
    <TwTable
      resource="warehouses"
      columns={[
        { source: 'id',             label: 'ID' },
        { source: 'name',           label: 'Name' },
        { source: 'address',        label: 'Address' },
        { source: 'contact_number', label: 'Phone' },
        { source: 'owner_id',       label: 'Owner' },
      ]}
    />
  </>
);
