import {
  Create, Edit, SimpleForm, TextInput, required,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="name" validate={required()} />
    <TextInput source="description" />
  </>
);

export const CategoryCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const CategoryEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
