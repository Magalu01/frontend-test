import styled from 'styled-components';
import Switch from 'react-switch';

export const List = styled.div`
  display: flex;
  justify-content: center;
  width: 1360px;
  margin-top: 30px;
  flex-direction: column;
`;

export const TitleList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftTitle = styled.div`
  display: flex;
  justify-content: left;
  align-content: center;
  width: 30%;
  margin-left: 20px;
  h4 {
    color: #8c8c8c;
  }
`;

export const RightTitle = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 20px;
`;

export const Ordenable = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-right: 25px;
  h4 {
    padding-right: 25px;
    padding-left: 5px;
    color: #ff1510;
  }
  img {
    height: 20px;
    width: 20px;
  }
`;

export const SwitchButton = styled(Switch)`
  width: 60px;
  height: 50px;
  margin-top: -5px;
`;

export const Favorites = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  img {
    height: 15px;
    width: 15px;
  }
  h4 {
    padding-left: 5px;
    color: #ff1510;
  }
`;

export const BodyList = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-flow: wrap;
`;
export const HeroItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 300px;
  height: 300px;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ImgHero = styled.div`
  cursor: pointer;
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
    height: 20px;
    width: 20px;
    border: none;
    cursor: pointer;
  }
  img {
    height: 20px;
    width: 20px;
  }
`;
