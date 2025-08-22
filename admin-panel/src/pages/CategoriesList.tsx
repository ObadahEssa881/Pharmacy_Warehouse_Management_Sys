// src/pages/CategoriesList.tsx
import {
  List, Datagrid, TextField, TextInput, Pagination,
} from 'react-admin';

const Filter = [<TextInput label="Name" source="name" alwaysOn />];

export const CategoriesList = () => (
  <List filters={Filter} perPage={10} pagination={<Pagination />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
