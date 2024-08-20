import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nevigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          nevigate('/dex');
        }}
      >
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;
