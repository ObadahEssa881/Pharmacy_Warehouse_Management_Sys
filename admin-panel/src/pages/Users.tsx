import { TwTable } from '../components/tw/Table';

export const UsersPage = () => (
  <>
    <h1 className="text-2xl font-semibold mb-4">Users</h1>
    <TwTable
      resource="users"
      columns={[
        { source: 'id',          label: 'ID' },
        { source: 'username',    label: 'Username' },
        { source: 'email',       label: 'Email' },
        { source: 'role',        label: 'Role' },
        { source: 'pharmacy_id', label: 'Pharmacy' },
        { source: 'created_at',  label: 'Created' },
      ]}
    />
  </>
);
