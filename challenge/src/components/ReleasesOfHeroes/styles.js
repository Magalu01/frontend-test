import styled from 'styled-components';

export const BodyList = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
`;
export const HeroItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 300px;
  height: 300px;
  flex-direction: column;
`;

export const ImgHero = styled.div`
  img {
    width: 250px;
    height: 250px;
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
