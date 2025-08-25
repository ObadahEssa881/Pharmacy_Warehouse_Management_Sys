// src/pages/PurchaseOrdersList.tsx
import {
  List, Datagrid, DateField, TextField, Pagination,
} from 'react-admin';
import { useAuth } from '../auth/AuthContext';

export const PurchaseOrdersList = () => {
  const { pharmacy_id } = useAuth();
  return (
    <List filter={{ pharmacy_id }} perPage={10} pagination={<Pagination />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="supplier_id" />
        <DateField source="order_date" />
        <DateField source="delivery_date" />
        <TextField source="status" />
      </Datagrid>
    </List>
  );
};
