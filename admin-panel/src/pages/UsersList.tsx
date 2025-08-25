// src/pages/UsersList.tsx
import {
  List, Datagrid, TextField, DateField, Pagination, TextInput,
} from 'react-admin';
import { useAuth } from '../auth/AuthContext';

const UserFilter = [
  <TextInput label="Search by username" source="username" alwaysOn />,
  <TextInput label="Email" source="email" />,
];

export const UsersList = () => {
  const { pharmacy_id } = useAuth();
  return (
    <List
      filters={UserFilter}
      filter={{ pharmacy_id }}
      perPage={10}
      pagination={<Pagination rowsPerPageOptions={[5, 10, 25]} />}
    >
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="email" />
        <TextField source="role" />
        <TextField source="pharmacy_id" />
        <DateField source="created_at" showTime />
      </Datagrid>
    </List>
  );
};
