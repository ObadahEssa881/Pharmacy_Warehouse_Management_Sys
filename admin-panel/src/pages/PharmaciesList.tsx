// src/pages/PharmaciesList.tsx
import {
  List, Datagrid, TextField, TextInput, Pagination,
} from 'react-admin';

const Filter = [
  <TextInput label="Name" source="name" alwaysOn />,
  <TextInput label="Address" source="address" />,
];

export const PharmaciesList = () => (
  <List filters={Filter} perPage={10} pagination={<Pagination rowsPerPageOptions={[5, 10, 25]} />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="address" />
      <TextField source="contact_number" />
    </Datagrid>
  </List>
);
