import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/PokemonCard';
import styled from 'styled-components';

const Home = () => {
  const nevigate = useNavigate();
  return (
    <>
      <HomeDiv>
        <Button
          onClick={() => {
            nevigate('/dex');
          }}
        >
          포켓몬 도감 시작하기
        </Button>
      </HomeDiv>
    </>
  );
};

export default Home;

const HomeDiv = styled.div`
  text-align: center;
`;
