/*
=================================================================================================================
Name: SignupForm.js
Assignment: 5
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: April 8th, 2024
=================================================================================================================
*/
import React, { useState } from 'react';
import LoginForm from './LoginForm';

const SignupForm = ({ onSwitchToLogin, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      setError('All fields are required!');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    const existingUsernames = ['user1', 'user2']; 
    if (existingUsernames.includes(username)) {
      setError('Username is already taken.');
      return;
    }
    // Assuming onSignup is a function to handle signup
    onSignup({ username, password, email });
    // After successful signup, switch to login form
    setShowLoginForm(true);
  };

  const handleSwitchToLogin = () => {
    setShowLoginForm(true);
  };

  return (
    <div style={{ marginLeft: '10px' }}>
      {!showLoginForm && <h2>Signup</h2>}
      {showLoginForm ? (
        <LoginForm />
      ) : (
        <form onSubmit={handleSignup} style={{ alignItems: 'left' }}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <br />
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">Signup</button>
          <br />
          <button type="button" onClick={handleSwitchToLogin}>Switch to Login</button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
