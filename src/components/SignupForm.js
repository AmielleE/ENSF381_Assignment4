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
      setError('Please fill in all fields.');
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
    <form onSubmit={handleSignup}>
      {error && <div>{error}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Signup</button>
      <button type="button" onClick={onSwitchToLogin}>Switch to Login</button>
    </form>
  );
};

export default SignupForm;