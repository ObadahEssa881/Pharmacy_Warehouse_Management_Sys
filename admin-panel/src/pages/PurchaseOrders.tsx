import { TwTable } from '../components/tw/Table';

export const PurchaseOrdersPage = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Purchase Orders</h1>
    <TwTable
      resource="purchase-orders"
      columns={[
        { source: 'id',          label: 'ID' },
        { source: 'supplier_id', label: 'Supplier' },
        { source: 'pharmacy_id', label: 'Pharmacy' },
        { source: 'order_date',  label: 'Ordered' },
        { source: 'delivery_date',label: 'Delivery' },
        { source: 'status',      label: 'Status' },
      ]}
    />
  </>
);
