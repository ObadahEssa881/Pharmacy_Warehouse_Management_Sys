import { List, Datagrid, TextField, NumberField, EditButton, TextInput } from 'react-admin';

const filters = [<TextInput source="name" label="Search by name" alwaysOn />];

export const MedicinesList = () => (
  <List filters={filters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="stock" />
      <NumberField source="sale_price" />
      <EditButton />
    </Datagrid>
  </List>
);
