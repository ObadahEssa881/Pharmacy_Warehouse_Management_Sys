import { TwTable } from '../components/tw/Table';

export const InventoryList = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Inventory</h1>
    <TwTable
      resource="inventory"
      columns={[
        { source: 'id',            label: 'ID' },
        { source: 'medicine_id',   label: 'Medicine' },
        { source: 'location_type', label: 'Loc' },
        { source: 'quantity',      label: 'Qty' },
        { source: 'cost_price',    label: 'Cost' },
        { source: 'selling_price', label: 'Price' },
        { source: 'expiry_date',   label: 'Expiry' },
        { source: 'pharmacy_id',   label: 'Pharmacy' },
        { source: 'warehouse_id',  label: 'Warehouse' },
      ]}
    />
  </>
);
