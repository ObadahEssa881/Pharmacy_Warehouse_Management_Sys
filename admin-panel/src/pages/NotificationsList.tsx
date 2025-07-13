// src/pages/NotificationsList.tsx
import {
  List, Datagrid, TextField, DateField, Pagination,
} from 'react-admin';
import { useAuth } from '../auth/AuthContext';

export const NotificationsList = () => {
  const { role } = useAuth();
  return (
    <List perPage={10} pagination={<Pagination />} filter={role === 'SUPPLIER_ADMIN' ? {} : {}}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="message" />
        <TextField source="type" />
        <DateField source="created_at" showTime />
        <TextField source="is_read" />
      </Datagrid>
    </List>
  );
};
