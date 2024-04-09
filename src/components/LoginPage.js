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
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = ({ setIsLoggedIn }) => {
  const [showLogin, setShowLogin] = useState(true);

  const switchForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div>
      <Header />
      {showLogin ? (
        <LoginForm switchToSignup={switchForm} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <SignupForm switchToLogin={switchForm} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;