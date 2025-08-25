// src/pages/InvoicesList.tsx
import {
  List, Datagrid, TextField, DateField, TextInput, Pagination,
} from 'react-admin';

const Filter = [<TextInput label="Order ID" source="order_id" />];

export const InvoicesList = () => (
  <List filters={Filter} perPage={10} pagination={<Pagination />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="order_id" />
      <TextField source="supplier_id" />
      <DateField source="invoice_date" />
      <TextField source="total_amount" />
      <TextField source="payment_status" />
    </Datagrid>
  </List>
);
