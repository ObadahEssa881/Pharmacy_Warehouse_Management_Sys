import {
  List, Datagrid, TextField, NumberField, Edit, SimpleForm,
  TextInput, NumberInput, Create, DateField, EditButton, DeleteButton, required,
} from 'react-admin';

export const PharmacyList = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="address" />
      <TextField source="contact_number" />
      <NumberField source="owner_id" />
      <DateField source="created_at" />
      <EditButton /><DeleteButton />
    </Datagrid>
  </List>
);

export const PharmacyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="address" validate={required()} />
      <TextInput source="contact_number" validate={required()} />
      <NumberInput source="owner_id" />
    </SimpleForm>
  </Create>
);

export const PharmacyEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
      <TextInput source="contact_number" />
      <NumberInput source="owner_id" />
    </SimpleForm>
  </Edit>
);
