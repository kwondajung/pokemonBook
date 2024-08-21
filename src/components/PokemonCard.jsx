import React from 'react';
import styled from 'styled-components';
import MOCK_DATA from '../mock';

function PokemonCard({ pokemon, onAdd, isSelected }) {
  return (
    <Card>
      <img src={pokemon.img_url} alt={pokemon.name} />

      <b>
        <p>{pokemon.name}</p>
      </b>
      <p style={{ fontSize: 12 }}>
        No.{pokemon.id.toString().padStart(3, '0')}
      </p>
      {isSelected ? (
        <Button onClick={() => {}}>삭제</Button>
      ) : (
        <Button
          onClick={() => {
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;

const Card = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  padding: 10px;
`;

const Button = styled.button`
  cursor: pointer;
`;
