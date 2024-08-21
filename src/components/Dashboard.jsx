import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

function Dashboard({ selcetdPokemon }) {
  return (
    <DashboardContainer>
      <h2>내 포켓볼</h2>
      {selcetdPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selcetdPokemon.map((pokemon) => {
            return <li key={pokemon.id}>{pokemon.korean_name}</li>;
          })}
        </ul>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;

const DashboardContainer = styled.div`
  background-color: #dbdbdb;
  height: 300px;
  text-align: center;
`;
