/*
=================================================================================================================
Name: LoginPage.js
Assignment: 5
Author(s): Amielle El Makhzoumi, Diba Jamali
Submission: April 8th, 2024
=================================================================================================================
*/
import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';
import SignupForm from './SignupForm'; 

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const switchForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLogin = () => {
    switchForm();
  };

  return (
    <div>
      <Header />
      {showLoginForm ? (
        <LoginForm switchToSignup={switchForm} onLogin={handleLogin} />
      ) : (
        <SignupForm switchToLogin={switchForm} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;