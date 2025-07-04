import { TwTable } from '../components/tw/Table';

export const InvoicesPage = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Invoices</h1>
    <TwTable
      resource="invoices"
      columns={[
        { source: 'id',             label: 'ID' },
        { source: 'order_id',       label: 'Order' },
        { source: 'supplier_id',    label: 'Supplier' },
        { source: 'invoice_date',   label: 'Date' },
        { source: 'total_amount',   label: 'Amount' },
        { source: 'payment_status', label: 'Payment' },
      ]}
    />
  </>
);
