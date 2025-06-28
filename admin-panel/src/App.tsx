// src/App.tsx
import { CoreAdminContext } from 'ra-core';
import { Routes, Route } from 'react-router-dom';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';
import { TailAdminShell } from './components/TailAdminShell';
import { UsersPage } from './pages/Users';
import { Dashboard } from './pages/Dashboard';

export const App = () => (
  <CoreAdminContext dataProvider={dataProvider} authProvider={authProvider}>
    <TailAdminShell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </TailAdminShell>
  </CoreAdminContext>
);
