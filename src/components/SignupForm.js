/*
=================================================================================================================
Name: SignupFrom.js
Assignment: 5
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: April 8th, 2024
=================================================================================================================
*/
import React, {useState} from 'react';

const SignupForm = ({ switchToLogin }) => {
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password, confirmPassword, email } = event.target.elements;

    if (!username.value || !password.value || !confirmPassword.value || !email.value) {
      setMessage({ text: 'All fields are required.', type: 'error' });
      return;
    }

    if (password.value !== confirmPassword.value) {
      setMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
          email: email.value,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to sign up.');
      }

      setMessage({ text: 'User signed up successfully!', type: 'success' });
    } catch (error) {
      console.error('Signup Error:', error);
      setMessage({ text: error.message || 'Failed to sign up.', type: 'error' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message.text && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green', marginBottom: '10px' }}>
          {message.text}
        </div>
      )}
      <div>
        <label>
          Username:
          <input 
          name="username" 
          type="text" 
          placeholder="Username" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input 
          name="password" 
          type="password" 
          placeholder="Password" />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input 
          name="confirmPassword" 
          type="password" 
          placeholder="Confirm Password" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input 
          name="email" 
          type="email" 
          placeholder="Email" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;