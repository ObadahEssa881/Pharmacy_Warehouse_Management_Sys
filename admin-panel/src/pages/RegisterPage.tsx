// src/pages/RegisterPage.tsx
import { useState } from "react";

export const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
    userType: "pharmacy",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint =
      form.userType === "pharmacy" ? "/auth/user/signup" : "/auth/supplier/signup";

    try {
      const res = await fetch(`http://localhost:3000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Registration failed");

      setMessage("Account created! You can now login.");
    } catch (err: any) {
      setMessage("Registration failed: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: "100px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <select name="userType" value={form.userType} onChange={handleChange}>
          <option value="pharmacy">Pharmacy Owner</option>
          <option value="supplier">Supplier Admin</option>
        </select>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Register</button>
        <p>{message}</p>
      </form>
    </div>
  );
};
