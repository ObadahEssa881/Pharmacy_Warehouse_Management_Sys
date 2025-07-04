import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const PrivateRoute = ({
  roles,
  children,
}: {
  roles: string[];      // allowed roles
  children: JSX.Element;
}) => {
  const { token, role } = useAuth();

  if (!token) return <Navigate to="/login" replace />;
  if (!roles.includes(role || '')) return <Navigate to="/unauthorized" replace />;

  return children;
};
