import {
  List, Datagrid, NumberField, Edit, SimpleForm,
  NumberInput, Create, EditButton, DeleteButton, required,
} from 'react-admin';

export const PurchaseOrderItemList = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <NumberField source="order_id" />
      <NumberField source="medicine_id" />
      <NumberField source="quantity" />
      <NumberField source="unit_price" />
      <EditButton /><DeleteButton />
    </Datagrid>
  </List>
);

export const PurchaseOrderItemCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="order_id" validate={required()} />
      <NumberInput source="medicine_id" validate={required()} />
      <NumberInput source="quantity" validate={required()} />
      <NumberInput source="unit_price" validate={required()} />
    </SimpleForm>
  </Create>
);

export const PurchaseOrderItemEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="quantity" />
      <NumberInput source="unit_price" />
    </SimpleForm>
  </Edit>
);
