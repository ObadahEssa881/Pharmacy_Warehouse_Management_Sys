import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  DateInput,
  useNotify,
  useRedirect,
  required,
} from 'react-admin';

const roleChoices = [
  { id: 'PHARMACY_OWNER', name: 'PHARMACY_OWNER' },
  { id: 'PHARMACIST', name: 'PHARMACIST' },
];

const UserFormFields = () => (
  <>
    <TextInput source="username" validate={required()} />
    <TextInput source="email" validate={required()} />
    <TextInput source="password_hash" label="Password Hash" validate={required()} />
    <SelectInput source="role" choices={roleChoices} />
    <TextInput source="pharmacy_id" />
    <DateInput source="created_at" />
  </>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm><UserFormFields /></SimpleForm>
  </Create>
);

export const UserEdit = () => (
  <Edit>
    <SimpleForm><UserFormFields /></SimpleForm>
  </Edit>
);
