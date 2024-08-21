import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dex from './pages/Dex';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          {/* 디테일 페이지 추가하기 */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
