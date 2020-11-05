import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContentByHero = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RightItem = styled.div``;

export const LeftItem = styled.div`
  width: 300px;
  margin-right: 170px;
`;

export const HeroTitle = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    color: #404040;
  }
  img {
    height: 25px;
    width: 25px;
  }
`;

export const InfoHero = styled.div`
  p {
    font-size: 18px;
    color: #8c8c8c;
  }
`;

export const BooksAndMovies = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

export const Rating = styled.div``;

export const Date = styled.div``;

export const Books = styled.div`
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    h5 {
      padding-left: 20px;
      font-size: 20px;
      color: #404040;
    }
  }
`;

export const Movies = styled.div`
  margin-top: 10px;
  div {
    display: flex;
    align-items: center;
    h5 {
      padding-left: 20px;
      font-size: 20px;
      color: #404040;
    }
  }
`;
