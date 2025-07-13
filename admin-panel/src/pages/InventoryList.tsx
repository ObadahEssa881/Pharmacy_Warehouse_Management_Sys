// src/pages/InventoryList.tsx
import {
  List, Datagrid, TextField, DateField, TextInput, Pagination,
} from 'react-admin';
import { useAuth } from '../auth/AuthContext';

const Filter = [<TextInput label="Medicine ID" source="medicine_id" />];

export const InventoryList = () => {
  const { pharmacy_id, warehouse_id } = useAuth();
  return (
    <List
      filter={{ pharmacy_id, warehouse_id }}
      filters={Filter}
      perPage={10}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="medicine_id" />
        <TextField source="quantity" />
        <TextField source="cost_price" />
        <TextField source="selling_price" />
        <DateField source="expiry_date" />
        <DateField source="last_updated" />
      </Datagrid>
    </List>
  );
};
