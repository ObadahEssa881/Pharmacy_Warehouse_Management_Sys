import { List, Datagrid, TextField, TextInput } from 'react-admin';
import { FulfillOrderButton } from './FulfillOrderButton';

const filters = [<TextInput source="status" label="Filter by Status" />];

export const PurchaseOrdersList = () => (
  <List filters={filters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="supplier.name" />
      <TextField source="status" />
      <FulfillOrderButton />
    </Datagrid>
  </List>
);
