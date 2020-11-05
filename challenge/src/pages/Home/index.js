import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterHeroes from '../../components/FilterHeroes';
import ListOfHeroes from '../../components/ListOfHeroes';

import { getAllHeroes } from '../../store/actions/Heroes';
import { Container, Header, Content } from './styles';

const Home = () => {
  const [order, setOrder] = useState(false);
  const dispatch = useDispatch();

  const { heroes } = useSelector((state) => state.heroes);

  useEffect(() => {
    dispatch(getAllHeroes());
  }, []);

  return (
    <Container>
      <Header>
        <FilterHeroes heroes={heroes} />
      </Header>
      <Content>
        <ListOfHeroes heroes={heroes} setOrder={setOrder} order={order} />
      </Content>
      <footer></footer>
    </Container>
  );
};

export default Home;
