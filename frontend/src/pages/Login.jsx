import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the JWT token generated with secret 'MISHTHI'
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        alert("Welcome back!");
        navigate('/dashboard');
      } else {
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      // This catches the "Server error" alert
      alert("Server error. Check your backend terminal for database connection.");
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setCredentials({...credentials, email: e.target.value})} required />
        <input type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials, password: e.target.value})} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;