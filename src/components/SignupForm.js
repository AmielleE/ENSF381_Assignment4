/*
=================================================================================================================
Name: SignupForm.js
Assignment: 5
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: April 8th, 2024
=================================================================================================================
*/
import React, { useState } from 'react';

const SignupForm = ({ onSwitchToLogin, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

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
    // Check if the username is already taken
    // Simulate checking by comparing with a hardcoded list of existing usernames
    const existingUsernames = ['user1', 'user2']; // Replace with actual logic to check for existing usernames
    if (existingUsernames.includes(username)) {
      setError('Username is already taken.');
      return;
    }
    // Call the signup function passed as a prop
    onSignup({ username, password, email });
  };

  return (
    <form onSubmit={handleSignup} style={{ marginLeft: '2px' }}>
      <h2>Signup</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <br/>
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
      <button type="button" onClick={onSwitchToLogin}>Switch to Login</button>
    </form>
  );
};

export default SignupForm;
