import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 20px;
    color: #404040;
    font-weight: bold;
  }

  h4 {
    color: #8c8c8c;
    margin-top: 10px;
    font-size: 14px;
  }
  div {
    width: 100%;
    img {
      position: fixed;
      margin-top: 70px;
      height: 25px;
      margin-left: 20px;
    }
    input {
      margin-top: 50px;
      border-radius: 100px;
      height: 60px;
      width: 100%;
      border: none;
      background: #fdecec;
      text-indent: 60px;
      font-size: 20px;
      text-decoration-color: red;
      color: #ff1510;
      &::-webkit-input-placeholder {
        color: #ff1510;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
