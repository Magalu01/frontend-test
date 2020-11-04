import styled from 'styled-components';

export const BodyList = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  h1 {
    margin-top: 40px;
  }
`;
export const HeroItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100px;
  height: 150px;
  flex-direction: column;
`;

export const ImgHero = styled.div`
  img {
    width: 100px;
    height: 150px;
    border-bottom: 6px solid red;
  }
  padding: 25px;
`;

export const InfosHero = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: -25px;
  padding: 25px;
  h4 {
    color: #404040;
  }
  button {
    border: none;
  }
`;
