import { TwTable } from '../components/tw/Table';

export const SalesList = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Sales</h1>
    <TwTable
      resource="sales"
      columns={[
        { source: 'id',            label: 'ID' },
        { source: 'pharmacy_id',   label: 'Pharmacy' },
        { source: 'customer_name', label: 'Customer' },
        { source: 'sale_date',     label: 'Date' },
        { source: 'total_amount',  label: 'Total' },
        { source: 'payment_mode',  label: 'Payment' },
      ]}
    />
  </>
);
