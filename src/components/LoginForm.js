/*
=================================================================================================================
Name: LoginFrom.js
Assignment: 5
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: April 8th, 2024
=================================================================================================================
*/
import React, { useState } from 'react';

const LoginForm = ({ onSwitchToSignup, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('All fields are required!');
      return;
    }
    // Call the login function passed as a prop
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleLogin} style={{ marginLeft: '10px' }}>
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <br />
      <button type="button" onClick={onSwitchToSignup}>Switch to Signup</button>
    </form>
  );
};

export default LoginForm;
