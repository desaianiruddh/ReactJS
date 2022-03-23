import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Pages/Home.jsx';
import Features from './components/Pages/Features.jsx';
import AboutUs from './components/Pages/AboutUs.jsx';
import Profile from './components/Pages/Profile';
import ErrorPage from './components/Pages/ErrorPage';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features/" element={<Features />} />
        <Route path="/profile/:userName" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
