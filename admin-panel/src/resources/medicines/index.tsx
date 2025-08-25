// src/resources/medicines/index.tsx
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  NumberInput,
  EditButton,
  DeleteButton,
  required,
} from 'react-admin';

export const MedicineList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="titer" />
      <ReferenceField source="category_id" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="company_id" reference="companies">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="supplier_id" reference="suppliers">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="unit_price" />
      <TextField source="Type" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const MedicineEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="titer" validate={required()} />
      <ReferenceInput source="category_id" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="company_id" reference="companies">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="supplier_id" reference="suppliers">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="unit_price" />
      <TextInput source="Type" />
    </SimpleForm>
  </Edit>
);

export const MedicineCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <TextInput source="titer" validate={required()} />
      <ReferenceInput source="category_id" reference="categories">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="company_id" reference="companies">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="supplier_id" reference="suppliers">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="unit_price" />
      <TextInput source="Type" />
    </SimpleForm>
  </Create>
);
