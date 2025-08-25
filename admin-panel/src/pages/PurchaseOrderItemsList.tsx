// src/pages/PurchaseOrderItemsList.tsx
import {
  List, Datagrid, TextField, TextInput, Pagination,
} from 'react-admin';

const Filter = [<TextInput label="Order ID" source="order_id" />];

export const PurchaseOrderItemsList = () => (
  <List filters={Filter} perPage={10} pagination={<Pagination />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="order_id" />
      <TextField source="medicine_id" />
      <TextField source="quantity" />
      <TextField source="unit_price" />
    </Datagrid>
  </List>
);
