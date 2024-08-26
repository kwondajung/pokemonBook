import React from 'react';
import styled from 'styled-components';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemonList }) {
  return (
    <ListContainer>
      {pokemonList.map(function (pokemon) {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={{
              id: pokemon.id,
              name: pokemon.korean_name,
              img_url: pokemon.img_url,
              types: pokemon.types,
            }}
            onAdd={() => {}}
            isSelected={false}
          />
        );
      })}
    </ListContainer>
  );
}
// console.log(MOCK_DATA);

export default PokemonList;

const ListContainer = styled.div`
  background-color: #dbdbdb;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  width: 1200px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
`;
