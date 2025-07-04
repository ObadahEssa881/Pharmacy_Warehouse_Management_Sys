import { TwTable } from '../components/tw/Table';

export const PurchaseOrderItemsPage = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Purchase‑Order Items</h1>
    <TwTable
      resource="purchase-order-items"
      columns={[
        { source: 'id',          label: 'ID' },
        { source: 'order_id',    label: 'Order' },
        { source: 'medicine_id', label: 'Medicine' },
        { source: 'quantity',    label: 'Qty' },
        { source: 'unit_price',  label: 'Price' },
      ]}
    />
  </>
);
