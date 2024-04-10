import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import navigate from react-router-dom

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      console.log(response.data);

      // Handle successful login
      // Redirect user to a new path after successful login
      navigate('/FakePaymentForm'); // Replace '/dashboard' with your desired path
    } catch (err) {
      console.error(err);
      setError('Invalid username or password');
    }
  };

  return (
    <div className='Login-Container'>
      <h2 className='Login-Head'>Account Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='Login-Form'>
          <label>Email:</label>
          <input placeholder='Enter Email' 
           type="email"
           value={email}
            onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='Login-Form'>
          <label>Password:</label>
          <input placeholder='Enter Password'
          type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
