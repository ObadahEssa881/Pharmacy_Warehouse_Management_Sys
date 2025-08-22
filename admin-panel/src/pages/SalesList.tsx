// src/pages/SalesList.tsx
import {
  List, Datagrid, TextField, DateField, TextInput, Pagination,
} from 'react-admin';
import { useAuth } from '../auth/AuthContext';

const Filter = [<TextInput label="Customer Name" source="customer_name" />];

export const SalesList = () => {
  const { pharmacy_id } = useAuth();
  return (
    <List filter={{ pharmacy_id }} filters={Filter} perPage={10} pagination={<Pagination />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="customer_name" />
        <DateField source="sale_date" />
        <TextField source="total_amount" />
        <TextField source="payment_mode" />
      </Datagrid>
    </List>
  );
};
