// src/resources/inventory/index.tsx
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  EditButton,
  DeleteButton,
  Edit,
  SimpleForm,
  NumberInput,
  DateInput,
  SelectInput,
  Create,
  ReferenceInput,
  useGetIdentity,
} from 'react-admin';

export const InventoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="medicine.name" label="Medicine" />
      <TextField source="location_type" />
      <NumberField source="quantity" />
      <NumberField source="cost_price" />
      <NumberField source="selling_price" />
      <DateField source="expiry_date" />
      <DateField source="last_updated" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const InventoryEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="medicine_id" reference="medicines" />
      <SelectInput
        source="location_type"
        choices={[
          { id: 'PHARMACY', name: 'Pharmacy' },
          { id: 'WAREHOUSE', name: 'Warehouse' },
        ]}
      />
      <NumberInput source="quantity" />
      <NumberInput source="cost_price" />
      <NumberInput source="selling_price" />
      <DateInput source="expiry_date" />
    </SimpleForm>
  </Edit>
);

export const InventoryCreate = () => {
  const { identity } = useGetIdentity();

  return (
    <Create>
      <SimpleForm defaultValues={{ location_type: 'PHARMACY' }}>
        <ReferenceInput source="medicine_id" reference="medicines" />
        <NumberInput source="quantity" />
        <NumberInput source="cost_price" />
        <NumberInput source="selling_price" />
        <DateInput source="expiry_date" />
      </SimpleForm>
    </Create>
  );
};
