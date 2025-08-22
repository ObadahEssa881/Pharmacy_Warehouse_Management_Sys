import {
  List, Datagrid, TextField, EmailField, NumberField, Edit, SimpleForm,
  TextInput, NumberInput, Create, SelectField, SelectInput,
  EditButton, DeleteButton, required,
} from 'react-admin';

const roleChoices = [
  { id: 'SUPPLIER_ADMIN', name: 'Admin' },
  { id: 'SUPPLIER_EMPLOYEE', name: 'Employee' },
];

export const SupplierList = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <SelectField source="role" choices={roleChoices} />
      <TextField source="contact_person" />
      <TextField source="phone" />
      <TextField source="address" />
      <NumberField source="warehouseId" />
      <EditButton /><DeleteButton />
    </Datagrid>
  </List>
);

export const SupplierCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="email" validate={required()} />
      <TextInput source="password_hash" validate={required()} />
      <SelectInput source="role" choices={roleChoices} validate={required()} />
      <TextInput source="contact_person" />
      <TextInput source="phone" validate={required()} />
      <TextInput source="address" validate={required()} />
      <NumberInput source="warehouseId" validate={required()} />
    </SimpleForm>
  </Create>
);

export const SupplierEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <SelectInput source="role" choices={roleChoices} />
      <TextInput source="contact_person" />
      <TextInput source="phone" />
      <TextInput source="address" />
    </SimpleForm>
  </Edit>
);
