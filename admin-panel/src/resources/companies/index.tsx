import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  EditButton,
  DeleteButton,
  required,
} from 'react-admin';

export const CompanyList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="contact_person" />
      <TextField source="phone" />
      <EmailField source="email" />
      <TextField source="address" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CompanyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="contact_person" />
      <TextInput source="phone" validate={required()} />
      <TextInput source="email" validate={required()} />
      <TextInput source="address" validate={required()} />
    </SimpleForm>
  </Create>
);

export const CompanyEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="contact_person" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <TextInput source="address" />
    </SimpleForm>
  </Edit>
);
