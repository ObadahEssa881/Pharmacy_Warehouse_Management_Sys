import {
  Create, Edit, SimpleForm, TextInput, NumberInput,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="order_id" />
    <TextInput source="medicine_id" />
    <NumberInput source="quantity" />
    <NumberInput source="unit_price" />
  </>
);

export const PurchaseOrderItemCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const PurchaseOrderItemEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
