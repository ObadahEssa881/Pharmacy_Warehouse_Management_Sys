import {
  List, Datagrid, NumberField, DateField, TextField, Edit, SimpleForm,
  NumberInput, DateInput, SelectInput, Create, EditButton, required,
} from 'react-admin';

const statusChoices = [
  { id: 'PENDING', name: 'Pending' },
  { id: 'APPROVED', name: 'Approved' },
  { id: 'REJECTED', name: 'Rejected' },
];

export const PurchaseOrderList = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <NumberField source="supplier_id" />
      <NumberField source="pharmacy_id" />
      <DateField source="order_date" />
      <DateField source="delivery_date" />
      <TextField source="status" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PurchaseOrderCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="supplier_id" validate={required()} />
      <NumberInput source="pharmacy_id" validate={required()} />
      <DateInput source="delivery_date" />
      <SelectInput source="status" choices={statusChoices} defaultValue="PENDING" />
    </SimpleForm>
  </Create>
);

export const PurchaseOrderEdit = () => (
  <Edit>
    <SimpleForm>
      <SelectInput source="status" choices={statusChoices} />
      <DateInput source="delivery_date" />
    </SimpleForm>
  </Edit>
);
