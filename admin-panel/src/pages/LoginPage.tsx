import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMail, HiLockClosed } from 'react-icons/hi'; // 👈 fixed import
import { useAuth } from '../auth/AuthContext';

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState<'user' | 'supplier'>('user');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login({ email, password, type });
      navigate('/');
    } catch {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary">PharmaSys Login</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <div className="relative">
              {/* ✅ TS-safe JSX cast */}
              {HiMail({ className: 'absolute top-3 left-3 text-gray-400' }) as JSX.Element}
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <div className="relative">
              {HiLockClosed({ className: 'absolute top-3 left-3 text-gray-400' }) as JSX.Element}
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Login as</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as 'user' | 'supplier')}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="user">Pharmacy Owner</option>
              <option value="supplier">Supplier Admin</option>
            </select>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 text-white bg-primary hover:bg-primary-dark rounded-md transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
