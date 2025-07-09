// src/pages/UsersList.tsx
import { List, useListContext } from 'react-admin';
import { Card, CardContent } from '@mui/material';

const UsersTable = () => {
  const { data, isLoading } = useListContext();

  if (isLoading) return <p>Loading…</p>;
  if (!data?.length) return <p>No records.</p>;

  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <h2>Users</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Role</th>
              <th>Pharmacy ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((u: any) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.pharmacy_id ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export const UsersList = () => (
  <List resource="users">
    <UsersTable />
  </List>
);
