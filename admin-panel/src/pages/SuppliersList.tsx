// src/pages/SuppliersList.tsx
import {
  List, Datagrid, TextField, TextInput, Pagination,
} from 'react-admin';
import { useAuth } from '../auth/AuthContext';

const Filter = [
  <TextInput label="Name" source="name" alwaysOn />,
  <TextInput label="Email" source="email" />,
];

export const SuppliersList = () => {
  const { warehouse_id } = useAuth();
  return (
    <List filter={{ warehouseId: warehouse_id }} filters={Filter} perPage={10} pagination={<Pagination />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="role" />
        <TextField source="phone" />
        <TextField source="address" />
      </Datagrid>
    </List>
  );
};
