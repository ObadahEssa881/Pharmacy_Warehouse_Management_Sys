// src/pages/MedicinesList.tsx
import {
  List, Datagrid, TextField, TextInput, Pagination,
} from 'react-admin';

const Filter = [<TextInput label="Name" source="name" alwaysOn />];

export const MedicinesList = () => (
  <List filters={Filter} perPage={10} pagination={<Pagination />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="titer" />
      <TextField source="unit_price" />
      <TextField source="Type" />
      <TextField source="category_id" />
      <TextField source="company_id" />
    </Datagrid>
  </List>
);
