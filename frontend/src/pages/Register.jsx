import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',    // Backend MUST have 'fullName'
    email: '',       // Backend MUST have 'email'
    password: '',    // Backend MUST have 'password'
    role: 'receiver' // Backend MUST have 'role'
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const loadingToast = toast.loading("Creating your account...");
    try {
      // Step 1: Register
      const regRes = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Sends fullName, email, password, role
      });

      const regData = await regRes.json();

      if (regRes.ok) {
        // Step 2: Auto-Login
        const loginRes = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });

        const loginData = await loginRes.json();

        if (loginRes.ok) {
          localStorage.setItem('token', loginData.token); // Secret is 'MISHTHI'
          localStorage.setItem('user', JSON.stringify(loginData.user));
          alert("Registration and Login Successful!");
          navigate(loginData.user.role === 'donor' ? '/donor-dashboard' : '/browse-food');
        }
      } else {
        alert("Error: " + regData.message); // Shows why backend sent 400
      }
    } catch (error) {
      alert("Server error. Check your backend terminal.");
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto', color: 'white' }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Full Name" 
          onChange={(e) => setFormData({...formData, fullName: e.target.value})} required />
        <input type="email" placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <input type="password" placeholder="Password" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
          <option value="receiver">Receiver</option>
          <option value="donor">Donor</option>
        </select>
        <button type="submit" style={{ padding: '10px', background: '#28a745', color: 'white', cursor: 'pointer' }}>
          Register & Get Started
        </button>
      </form>
    </div>
  );
};

export default Register;