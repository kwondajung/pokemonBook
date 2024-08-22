import React from 'react';
import styled from 'styled-components';
import { Button, Card } from './PokemonCard';

function Dashboard({ selcetdPokemon, onRemovePokemon }) {
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
                // return <li key={pokemon.id}>{pokemon.korean_name}</li>;
                return (
                  <Card key={pokemon.id}>
                    <img src={pokemon.img_url} />
                    <p>{pokemon.korean_name}</p>
                    <Button
                      onClick={() => {
                        onRemovePokemon(pokemon);
                      }}
                    >
                      삭제
                    </Button>
                  </Card>
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
  background-color: #dbdbdb; //994848
  width: 1200px;
  height: 217px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  gap: 10px;
  padding: 10px;
  margin: auto;
  border-radius: 10px;
`;

// const Card = styled.div`
//   text-align: center;
//   background-color: white;
//   border-radius: 10px;
//   display: block;
//   cursor: pointer;
//   padding: 10px;
// `;
