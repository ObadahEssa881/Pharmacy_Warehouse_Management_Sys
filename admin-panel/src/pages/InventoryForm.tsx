import {
  Create, Edit, SimpleForm, TextInput, NumberInput, DateInput, SelectInput
} from 'react-admin';

const Fields = () => (
  <>
    <TextInput source="medicine_id" />
    <NumberInput source="quantity" />
    <SelectInput source="location_type" choices={[
      { id: 'PHARMACY', name: 'PHARMACY' },
      { id: 'WAREHOUSE', name: 'WAREHOUSE' },
    ]} />
    <NumberInput source="cost_price" />
    <NumberInput source="selling_price" />
    <DateInput source="expiry_date" />
    <TextInput source="pharmacy_id" />
    <TextInput source="warehouse_id" />
  </>
);

export const InventoryCreate = () => (
  <Create><SimpleForm><Fields /></SimpleForm></Create>
);

export const InventoryEdit = () => (
  <Edit><SimpleForm><Fields /></SimpleForm></Edit>
);
