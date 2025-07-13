import {
  Create, Edit, SimpleForm, TextInput, NumberInput,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="sale_id" />
    <TextInput source="medicine_id" />
    <NumberInput source="quantity" />
    <NumberInput source="unit_price" />
  </>
);

export const SaleItemCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const SaleItemEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
