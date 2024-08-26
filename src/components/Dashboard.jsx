import React, { useContext } from 'react';
import styled from 'styled-components';
import PokemonCard, { Button, Card } from './PokemonCard';
import { PokemonContainer } from '../pages/Dex';

function Dashboard() {
  const { selcetdPokemon } = useContext(PokemonContainer);
  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center' }}>내 포켓볼</h2>
        <DashboardContainer>
          {selcetdPokemon.length === 0 ? (
            <p>
              <b>포켓볼</b>이 비어있습니다!
            </p>
          ) : (
            <>
              {selcetdPokemon.map((pokemon) => {
                return (
                  <PokemonCard
                    key={pokemon.id}
                    pokemon={{
                      id: pokemon.id,
                      name: pokemon.name,
                      img_url: pokemon.img_url,
                      types: pokemon.types,
                    }}
                    onClick={() => {}}
                    isSelected={true}
                  />
                );
              })}
            </>
          )}
        </DashboardContainer>
      </div>
    </>
  );
}

export default Dashboard;

const DashboardContainer = styled.div`
  background-color: #dbdbdb;
  width: 1200px;
  height: 240px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 10px;
  margin: auto;
  border-radius: 10px;
`;
