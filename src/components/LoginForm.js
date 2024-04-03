/*
=================================================================================================================
Name: LoginFrom.js
Assignment: 5
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: April 8th, 2024
=================================================================================================================
*/
import React, { useState } from 'react';
import SignupForm from './SignupForm'; // Assuming you have a SignupForm component

const LoginForm = ({ onSwitchToSignup, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('All fields are required!');
      return;
    }
    // Call the login function passed as a prop
    onLogin({ username, password });
  };

  const handleSwitchToSignup = () => {
    setShowSignupForm(true);
  };

  return (
    <div style={{marginLeft: '10px'}}>
      {!showSignupForm && <h2>Login</h2>}
      {showSignupForm ? (
        <SignupForm />
      ) : (
        <form onSubmit={handleLogin}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <br/>
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
          <br/>
          <button type="button" onClick={handleSwitchToSignup}>Switch to Signup</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;