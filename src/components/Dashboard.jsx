import React, { useContext } from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { PokemonContainer } from '../pages/Dex';

function Dashboard() {
  const { selcetdPokemon } = useContext(PokemonContainer);
  return (
    <>
      <div>
        <img
          src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"
          alt="포켓몬 로고"
          style={{
            width: '200px',
            margin: 'auto',
            display: 'block',
            marginBottom: '20px',
          }}
        />
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
  background-color: #ececec;
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
