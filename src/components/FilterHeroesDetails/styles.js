import styled from 'styled-components';

export const HeaderTitle = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  @media (max-width: 1200px) {
    display: flex;
    align-items: start;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  img {
    height: 100px;
    cursor: pointer;
  }
`;

export const Filter = styled.div`
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

  @media (max-width: 1200px) {
    img {
      margin-left: -10px;
    }

    input {
      max-width: 100vh;
      margin-left: -40px;
      margin-top: 10px;
      border-radius: 100px;
      height: 60px;
      width: 500px;
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

  @media (max-width: 700px) {
    img {
      margin-left: -10px;
    }

    input {
      max-width: 100vh;
      margin-left: -40px;
      margin-top: 10px;
      border-radius: 100px;
      height: 60px;
      width: 100%;
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
