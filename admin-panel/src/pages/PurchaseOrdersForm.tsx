import {
  Create, Edit, SimpleForm, TextInput, DateInput,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="supplier_id" />
    <TextInput source="pharmacy_id" />
    <TextInput source="status" />
    <DateInput source="order_date" />
    <DateInput source="delivery_date" />
  </>
);

export const PurchaseOrderCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const PurchaseOrderEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
