// src/pages/LoginPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, Select, Typography } from 'antd';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', userType: 'pharmacy' });
  const [error, setError] = useState('');

  const handleChange = (changed: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...changed }));
  };

  const handleSubmit = async () => {
    const endpoint =
      formData.userType === 'pharmacy' ? '/auth/user/signin' : '/auth/supplier/signin';

    try {
      const res = await fetch(`http://localhost:3333${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      if (!res.ok) throw new Error('Invalid credentials');

      const data = await res.json();
      localStorage.setItem('token', data.access_token);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Pharmacy Admin Login" style={{ width: 400, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Login As">
            <Select
              value={formData.userType}
              onChange={(val) => handleChange({ userType: val })}
              options={[
                { value: 'pharmacy', label: 'Pharmacy Owner' },
                { value: 'supplier', label: 'Supplier Admin' },
              ]}
            />
          </Form.Item>
          <Form.Item label="Email" required>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange({ email: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Password" required>
            <Input.Password
              value={formData.password}
              onChange={(e) => handleChange({ password: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
          {error && <Typography.Text type="danger">{error}</Typography.Text>}
        </Form>
      </Card>
    </div>
  );
};
