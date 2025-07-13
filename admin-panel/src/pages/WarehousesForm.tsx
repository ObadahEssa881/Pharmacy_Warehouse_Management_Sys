import {
  Create, Edit, SimpleForm, TextInput, required,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="name" validate={required()} />
    <TextInput source="address" />
    <TextInput source="contact_number" />
  </>
);

export const WarehouseCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const WarehouseEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
