import {
  Create, Edit, SimpleForm, TextInput, NumberInput, required,
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="name" validate={required()} />
    <TextInput source="titer" />
    <NumberInput source="unit_price" />
    <TextInput source="Type" />
    <TextInput source="category_id" />
    <TextInput source="company_id" />
    <TextInput source="supplier_id" />
  </>
);

export const MedicineCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const MedicineEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
