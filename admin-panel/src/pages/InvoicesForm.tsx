import {
  Create, Edit, SimpleForm, TextInput, NumberInput, DateInput,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="order_id" />
    <TextInput source="supplier_id" />
    <NumberInput source="total_amount" />
    <TextInput source="payment_status" />
    <DateInput source="invoice_date" />
  </>
);

export const InvoiceCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const InvoiceEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
