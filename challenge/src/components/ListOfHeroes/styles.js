import styled from 'styled-components';
import Switch from 'react-switch';

export const List = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
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

  h4 {
    color: #8c8c8c;
  }
`;

export const RightTitle = styled.div`
  display: flex;
  justify-content: right;
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
  display: flex;
  justify-content: center;
  align-content: center;
`;
