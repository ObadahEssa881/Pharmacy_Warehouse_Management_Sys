// src/pages/CompaniesList.tsx
import {
  List, Datagrid, TextField, TextInput, Pagination,
} from 'react-admin';

const Filter = [<TextInput label="Company Name" source="name" alwaysOn />];

export const CompaniesList = () => (
  <List filters={Filter} perPage={10} pagination={<Pagination />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="contact_person" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="address" />
    </Datagrid>
  </List>
);
