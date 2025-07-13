import {
  Create, Edit, SimpleForm, TextInput, required,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="name" validate={required()} />
    <TextInput source="contact_person" />
    <TextInput source="phone" />
    <TextInput source="email" />
    <TextInput source="address" />
  </>
);

export const CompanyCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const CompanyEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
