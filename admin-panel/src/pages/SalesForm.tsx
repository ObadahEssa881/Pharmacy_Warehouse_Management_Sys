import {
  Create, Edit, SimpleForm, TextInput, NumberInput, DateInput,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="pharmacy_id" />
    <TextInput source="customer_name" />
    <NumberInput source="total_amount" />
    <TextInput source="payment_mode" />
    <DateInput source="sale_date" />
  </>
);

export const SaleCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const SaleEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
