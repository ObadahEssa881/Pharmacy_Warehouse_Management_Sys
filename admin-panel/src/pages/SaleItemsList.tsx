// src/pages/SaleItemsList.tsx
import {
  List, Datagrid, TextField, TextInput, Pagination,
} from 'react-admin';

const Filter = [<TextInput label="Sale ID" source="sale_id" />];

export const SaleItemsList = () => (
  <List filters={Filter} perPage={10} pagination={<Pagination />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="sale_id" />
      <TextField source="medicine_id" />
      <TextField source="quantity" />
      <TextField source="unit_price" />
    </Datagrid>
  </List>
);
