import { AuthProvider } from 'react-admin';
import { jwtDecode } from 'jwt-decode';

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    const response = await fetch('http://localhost:3333/auth/user/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) throw new Error('Login failed');

    const { access_token } = await response.json();
    localStorage.setItem('token', access_token);
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },

  checkError: (error) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getIdentity: async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) throw new Error('No token'); // force error early

    const decoded = jwtDecode(token) as {
      id: number;
      email: string;
      role: string;
      type: string;
    };

    return {
      id: decoded.id,
      fullName: decoded.email,
      email: decoded.email,
    };
  },

  getPermissions: async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const decoded = JSON.parse(atob(token.split('.')[1]));
    return decoded.role;
  },
};
