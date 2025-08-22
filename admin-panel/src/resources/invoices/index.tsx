import {
  List, Datagrid, NumberField, DateField, TextField, Edit, SimpleForm,
  NumberInput, DateInput, TextInput, Create, EditButton,
} from 'react-admin';

export const InvoiceList = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <NumberField source="order_id" />
      <NumberField source="supplier_id" />
      <DateField source="invoice_date" />
      <NumberField source="total_amount" />
      <TextField source="payment_status" />
      <EditButton />
    </Datagrid>
  </List>
);

export const InvoiceCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="order_id" />
      <NumberInput source="supplier_id" />
      <DateInput source="invoice_date" />
      <NumberInput source="total_amount" />
      <TextInput source="payment_status" />
    </SimpleForm>
  </Create>
);

export const InvoiceEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="payment_status" />
      <NumberInput source="total_amount" />
    </SimpleForm>
  </Edit>
);
