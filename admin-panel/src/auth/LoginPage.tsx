// src/auth/LoginPage.tsx
import { useForm } from 'react-hook-form';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const isSupplier = data.accountType === 'supplier';
    const url = isSupplier
      ? 'http://localhost:3333/auth/supplier/signin'
      : 'http://localhost:3333/auth/user/signin';

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });

    if (res.ok) {
      const { access_token } = await res.json();
      login(access_token);
      const [, payloadBase64] = access_token.split('.');
      const decoded = JSON.parse(atob(payloadBase64));

      if (decoded.role === 'PHARMACY_OWNER') {
        navigate('/dashboard/owner');
      } else if (decoded.role === 'SUPPLIER_ADMIN') {
        navigate('/dashboard/supplier');
      }
    } else {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-20 space-y-4">
      <select {...register('accountType')} className="w-full border p-2">
        <option value="user">Pharmacy Owner</option>
        <option value="supplier">Supplier Admin</option>
      </select>
      <input {...register('email')} placeholder="Email" className="w-full border p-2" />
      <input type="password" {...register('password')} placeholder="Password" className="w-full border p-2" />
      <button type="submit" className="w-full bg-primary text-white p-2">Login</button>
    </form>
  );
};
