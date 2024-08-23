import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/PokemonCard';
import MOCK_DATA from '../mock';

// 쿼리스트링의 id와 같은 id의 포켓몬 찾기 => 문자열이니 형변환해야 함
// 찾은 포켓몬 정보 가져오기

// TODO: 타입 2개일 경우 나눠서 보여주기
const PokemonDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsId = Number(searchParams.get('id'));

  const navigate = useNavigate();

  const pokemonList = MOCK_DATA;
  const newPokemon = pokemonList.find(function (findPoke) {
    return findPoke.id === paramsId;
  });

  console.log(newPokemon);

  return (
    <DetailInfo>
      <img src={newPokemon.img_url} alt={newPokemon.korean_name} />
      <br />
      <h3>
        앗! 야생의 <b>{newPokemon.korean_name}</b>이(가) 나타났다!
      </h3>
      타입: {newPokemon.types} <br />
      {newPokemon.description}
      <br />
      <Button
        onClick={() => {
          navigate('/dex');
        }}
      >
        뒤로 가기
      </Button>
      {/* <p>{newArr.ko}</p> */}
    </DetailInfo>
  );
};

export default PokemonDetail;

const DetailInfo = styled.div`
  /* background-color: green; */
  text-align: center;
  margin-top: 300px;
  line-height: 180%;
`;
