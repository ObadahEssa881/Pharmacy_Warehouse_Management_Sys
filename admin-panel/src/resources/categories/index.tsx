import {
  List, Datagrid, TextField, Edit, SimpleForm,
  TextInput, Create, EditButton, DeleteButton, required,
} from 'react-admin';

export const CategoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <EditButton /><DeleteButton />
    </Datagrid>
  </List>
);

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
