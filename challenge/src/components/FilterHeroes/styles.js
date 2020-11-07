import styled from 'styled-components';

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    cursor: pointer;
  }
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
  @media (max-width: 500px) {
    h1 {
      font-size: 26px;
    }
    h4 {
      margin-top: -10px;
      padding: 40px;
    }
    div {
      margin-top: -70px;
    }
  }

  div {
    max-width: 1280px;
    width: 100%;
    img {
      position: absolute;
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
      text-indent: 80px;
      font-size: 18px;
      text-decoration-color: red;
      color: #ff1510;
      &::-webkit-input-placeholder {
        color: #ff1510;
      }
    }
  }
`;
