# 내일배움캠프 React 6기 과제

스파르타코딩클럽 내일배움캠프 React 6기 과정 중 제작한 <포켓몬 도감 만들기> 과제 입니다.

## 🖥️ 프로젝트 소개

### 1. 포켓몬 도감

마음에 드는 포켓몬을 추가 또는 삭제하며 구경할 수 있는 웹 사이트입니다. 또한, 각각의 포켓몬 카드 클릭 시 상세 페이지로 이동하여 해당 포켓몬의 자세한 설명을 볼 수 있습니다.

### 2. 레포지토리

📂 **props-drilling**  
`prop drilling`으로 작성한 코드가 있는 레포지토리입니다.

📂 **context**  
`context API`를 사용하여 위에서 작성한 prop drilling을 제거한 코드가 있는 레포지토리입니다.

## 🕰️ 개발 기간

2024.08.21 ~ 2024.08.26

## 🧩 주요 기능

- 포켓몬 추가 및 삭제
- `쿼리 스트링`으로 각 포켓몬의 상세 페이지로 동적 이동
- 조건부 스타일링을 활용한 포켓몬 카드 CSS

## 📂 폴더 구조

📦src  
 ┣ 📂assets  
 ┃ ┗ 📜react.svg  
 ┣ 📂components  
 ┃ ┣ 📜Dashboard.jsx  
 ┃ ┣ 📜PokemonCard.jsx  
 ┃ ┗ 📜PokemonList.jsx  
 ┣ 📂images  
 ┃ ┣ 📜oops.png  
 ┃ ┗ 📜intro.png  
 ┣ 📂pages  
 ┃ ┣ 📜Dex.jsx  
 ┃ ┣ 📜Home.jsx  
 ┃ ┗ 📜PokemonDetail.jsx  
 ┣ 📜App.css  
 ┣ 📜App.jsx  
 ┣ 📜index.css  
 ┣ 📜main.jsx  
 ┗ 📜mock.js

## 🔨 트러블 슈팅

### 비교 연산자 관련 오류

1. 구현하고자 했던 부분

- 포켓몬 상세 페이지로 동적 이동

2. 발생한 이슈

- `쿼리 스트링`으로 받아온 id 값과 동일한 포켓몬의 id를 `find()`로 찾으려고 하는데 계속 `undefined`가 뜨는 현상 발생

3. 시도한 방법

- `쿼리 스트링`으로 가져온 변수는 그대로 두고 `find()`로 찾는 값을 id가 아닌 포켓몬 이름으로 바꾼 후 URL에도 포켓몬 이름을 넣어 검색하니 정상적으로 실행됨

4. 해결 방법

- 쿼리스트링은 문자열이라는 것을 깨닫고 `쿼리 스트링`으로 받아온 id 값을 Number로 `형변환`하여 해결

```js
const paramsId = Number(searchParams.get('id'));
```
