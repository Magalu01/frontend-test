import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterHeroes from '../../components/FilterHeroes';
import ListOfHeroes from '../../components/ListOfHeroes';

// eslint-disable-next-line import/named
import { getAllHeroes } from '../../store/actions/Heroes';
import { Container, Header, Content } from './styles';

const Home = () => {
  const [order, setOrder] = useState(false);
  const [allHeroes, setAllHeroes] = useState([]);
  const [myFavorites, setMyFavorites] = useState(false);

  const { heroes } = useSelector((state) => state.heroes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHeroes());
  }, [dispatch]);

  useEffect(() => {
    setAllHeroes(heroes);
  }, [heroes]);

  return (
    <Container>
      <Header>
        <FilterHeroes heroes={heroes} />
      </Header>
      <Content>
        <ListOfHeroes
          heroes={allHeroes}
          setAllHeroes={setAllHeroes}
          setOrder={setOrder}
          order={order}
          myFavorites={myFavorites}
          setMyFavorites={setMyFavorites}
        />
      </Content>
      <footer></footer>
    </Container>
  );
};

export default Home;
