import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function PokemonCard({ pokemon, onAdd, isSelected }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/pokemon-detail?id=${pokemon.id}`);
        // 몇 번째 id 가진 애인지도 보내야 됨
      }}
      $pokemon={pokemon}
    >
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
          onClick={(e) => {
            onAdd(pokemon);
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
    transition: 0.5s;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: absolute;
  z-index: 1;
`;
