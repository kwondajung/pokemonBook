import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PokemonContainer } from '../pages/Dex';

function PokemonCard({ pokemon, isSelected }) {
  const navigate = useNavigate();
  const { addPokemon, removePokemon } = useContext(PokemonContainer);
  // console.log(pokemon);
  return (
    <Card
      onClick={() => {
        navigate(`/pokemon-detail?id=${pokemon.id}`);
      }}
      $pokemon={pokemon}
      $types={pokemon.types}
    >
      <img src={pokemon.img_url} alt={pokemon.name} />
      <p>
        <b>{pokemon.name}</b>
      </p>
      <p style={{ fontSize: 12 }}>
        No.{pokemon.id.toString().padStart(3, '0')}
      </p>
      {isSelected ? (
        <Button
          onClick={(e) => {
            removePokemon(pokemon);
            e.stopPropagation();
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            addPokemon(pokemon);
            e.stopPropagation(); // onClick 이벤트가 자식->부모로 전파되는 걸 방지하는 함수
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;

export const Card = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background: cornflowerblue;
    color: white;
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  /* display: absolute; */
  z-index: 1;
  border: none;
  height: 40px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin: auto;
`;
