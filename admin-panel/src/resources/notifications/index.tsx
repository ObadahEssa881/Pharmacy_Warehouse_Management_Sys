import {
  List, Datagrid, NumberField, TextField, DateField, BooleanField,
  Edit, SimpleForm, BooleanInput, Create, required,
} from 'react-admin';

export const NotificationList = () => (
  <List>
    <Datagrid>
      <NumberField source="id" />
      <NumberField source="user_id" />
      <TextField source="message" />
      <TextField source="type" />
      <DateField source="created_at" />
      <BooleanField source="is_read" />
    </Datagrid>
  </List>
);

// notifications are usually system‑only -> read‑only; create/edit omitted
