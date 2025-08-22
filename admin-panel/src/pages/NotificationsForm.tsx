import {
  Create, Edit, SimpleForm, TextInput, DateInput, BooleanInput,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="user_id" />
    <TextInput source="message" />
    <TextInput source="type" />
    <BooleanInput source="is_read" />
    <DateInput source="created_at" />
  </>
);

export const NotificationCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const NotificationEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
