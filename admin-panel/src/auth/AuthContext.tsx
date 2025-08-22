import { createContext, useContext, useState, useEffect } from 'react';

type AccountType = 'user' | 'supplier';

interface LoginInput {
  email: string;
  password: string;
  type: AccountType;
}

interface AuthState {
  token: string | null;
  role: string | null;
  pharmacy_id: number | null;
  warehouse_id: number | null;
  type: AccountType | null;
  login: (input: LoginInput) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthState>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken]   = useState<string | null>(localStorage.getItem('token'));
  const [payload, setPayload] = useState<any | null>(null);

  /* Decode JWT whenever token changes */
  useEffect(() => {
    if (!token) {
      setPayload(null);
      return;
    }
    const [, payloadBase64] = token.split('.');
    setPayload(JSON.parse(atob(payloadBase64)));
  }, [token]);

  /* ---- login ---- */
  const login = async ({ email, password, type }: LoginInput) => {
    const url =
      type === 'supplier'
        ? 'http://localhost:3333/auth/supplier/signin'
        : 'http://localhost:3333/auth/user/signin';

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error('Invalid credentials');

    const { access_token } = await res.json();
    localStorage.setItem('token', access_token);
    setToken(access_token); // will trigger effect above
  };

  /* ---- logout ---- */
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setPayload(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        role:          payload?.role          ?? null,
        pharmacy_id:   payload?.pharmacy_id   ?? null,
        warehouse_id:  payload?.warehouse_id  ?? null,
        type:          payload?.type          ?? null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
