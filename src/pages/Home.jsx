import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/PokemonCard';
import styled from 'styled-components';
import '../App.css';
import img from '../images/intro.png';

const Home = () => {
  const nevigate = useNavigate();
  return (
    <>
      <HomeDiv>
        <Button
          onClick={() => {
            nevigate('/dex');
          }}
          style={{
            position: 'absolute',
            bottom: '130px',
            right: '80px',
          }}
        >
          ▶ 시작하다
        </Button>
      </HomeDiv>
    </>
  );
};

export default Home;

const HomeDiv = styled.div`
  text-align: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  width: 600px;
  height: 600px;
  margin: auto;
  position: relative;
`;
