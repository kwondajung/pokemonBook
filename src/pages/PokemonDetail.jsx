import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/PokemonCard';
import MOCK_DATA from '../mock';
import img from '../images/oops.png';

// 쿼리스트링의 id와 같은 id의 포켓몬 찾기 => 문자열이니 형변환해야 함
// 찾은 포켓몬 정보 가져오기

const PokemonDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsId = Number(searchParams.get('id'));

  const navigate = useNavigate();

  const pokemonList = MOCK_DATA;
  const newPokemon = pokemonList.find(function (findPoke) {
    return findPoke.id === paramsId;
  });

  console.log([newPokemon.types]);

  return (
    <>
      <DetailInfo>
        <div>
          <img
            src={newPokemon.img_url}
            alt={newPokemon.korean_name}
            style={{
              position: 'absolute',
              top: '120px',
              right: '70px',
              width: '30%',
            }}
          />
          <br />
          <h3
            style={{
              position: 'absolute',
              bottom: '100px',
              left: '90px',
            }}
          >
            앗! 야생의{' '}
            <span
              style={{
                color: 'red',
              }}
            >
              {newPokemon.korean_name}
            </span>{' '}
            <br />
            이(가) 나타났다!
          </h3>
          <p
            style={{
              position: 'absolute',
              left: '90px',
              top: '50px',
            }}
          >
            <b>{newPokemon.types.join(', ')}</b> 타입 <br />
            {newPokemon.description}
          </p>
          <br />
          <Button
            onClick={() => {
              navigate('/dex');
            }}
            style={{
              position: 'absolute',
              bottom: '100px',
              right: '80px',
            }}
          >
            ▶ 도망치다
          </Button>
        </div>
      </DetailInfo>
    </>
  );
};

export default PokemonDetail;

const DetailInfo = styled.div`
  /* text-align: center; */
  /* margin-top: 300px; */
  line-height: 180%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position-x: 50%;
  width: 600px;
  height: 600px;
  position: relative;
  /* background-color: green; */
  margin: auto;
`;
