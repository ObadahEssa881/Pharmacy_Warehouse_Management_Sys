import {  List, Datagrid, TextField, EmailField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const UserList = () => (
  <List title="Users">
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="role" />
    </Datagrid>
  </List>
);
export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="role" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="password" type="password" />
      <TextInput source="role" />
      <TextInput source="pharmacy_id" />
    </SimpleForm>
  </Create>
);