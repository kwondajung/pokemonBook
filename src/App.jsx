import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dex from './pages/Dex';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
