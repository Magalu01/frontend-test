import styled from 'styled-components';

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  img {
    height: 100px;
    cursor: pointer;
  }
  div {
    max-width: 1280px;
    min-width: 500px;
    width: 100%;
    img {
      position: absolute;
      margin-top: 30px;
      height: 25px;
      margin-left: 60px;
    }
    input {
      max-width: 100vh;
      margin-left: 40px;
      margin-top: 10px;
      border-radius: 100px;
      height: 60px;
      width: 900px;
      border: none;
      background: #fff;
      text-indent: 80px;
      font-size: 18px;
      text-decoration-color: #8c8c8c;
      color: #8c8c8c;
      &::-webkit-input-placeholder {
        color: #8c8c8c;
      }
    }
  }
`;
