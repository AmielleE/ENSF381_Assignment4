/*
=================================================================================================================
Name: App.js
Assignment : 4
Author(s) : Amielle El Makhzoumi, Diba Jamali
Submission : March 25th, 2024
=================================================================================================================
*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProductPage from './components/ProductPage';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  );
}

export default App;
