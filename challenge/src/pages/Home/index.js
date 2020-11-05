import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterHeroes from '../../components/FilterHeroes';
import ListOfHeroes from '../../components/ListOfHeroes';

import { getAllHeroes } from '../../store/actions/Heroes';
import { Container, Header, Content } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const { heroes } = useSelector((state) => state.heroes);
  console.log(heroes);

  useEffect(() => {
    dispatch(getAllHeroes());
  }, []);

  return (
    <Container>
      <Header>
        <FilterHeroes />
      </Header>
      <Content>
        <ListOfHeroes />
      </Content>
    </Container>
  );
};

export default Home;
