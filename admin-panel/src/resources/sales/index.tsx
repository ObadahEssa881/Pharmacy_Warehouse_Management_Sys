import {
  List, Datagrid, NumberField, DateField, TextField, Edit, SimpleForm,
  TextInput, NumberInput, DateInput, Create, EditButton, required,
} from 'react-admin';

export const SaleList = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <NumberField source="pharmacy_id" />
      <TextField source="customer_name" />
      <DateField source="sale_date" />
      <NumberField source="total_amount" />
      <TextField source="payment_mode" />
      <EditButton />
    </Datagrid>
  </List>
);

export const SaleCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="pharmacy_id" validate={required()} />
      <TextInput source="customer_name" />
      <DateInput source="sale_date" />
      <NumberInput source="total_amount" validate={required()} />
      <TextInput source="payment_mode" validate={required()} />
    </SimpleForm>
  </Create>
);

export const SaleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="customer_name" />
      <TextInput source="payment_mode" />
    </SimpleForm>
  </Edit>
);
