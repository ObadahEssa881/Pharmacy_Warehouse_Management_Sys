import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  required,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="name" validate={required()} />
    <TextInput source="address" />
    <TextInput source="contact_number" />
    <DateInput source="created_at" />
  </>
);

export const PharmacyCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const PharmacyEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
