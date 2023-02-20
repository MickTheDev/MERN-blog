import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      alert('Registration successful');
    } else {
      alert('Registration failed. Try again later');
    }
  };

  return (
    <form
      className='register'
      onSubmit={register}
    >
      <h1>Register</h1>
      <input
        type='text'
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type='password'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type='submit'>Register</button>
    </form>
  );
};

export default RegisterPage;
