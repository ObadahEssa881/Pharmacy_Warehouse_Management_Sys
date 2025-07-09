import { TwTable } from '../components/tw/Table';

export const SaleItemsList = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Sale Items</h1>
    <TwTable
      resource="sale-items"
      columns={[
        { source: 'id',          label: 'ID' },
        { source: 'sale_id',     label: 'Sale' },
        { source: 'medicine_id', label: 'Medicine' },
        { source: 'quantity',    label: 'Qty' },
        { source: 'unit_price',  label: 'Price' },
      ]}
    />
  </>
);
