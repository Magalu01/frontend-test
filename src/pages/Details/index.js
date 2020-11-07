import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Header, Content } from './styles';
import FilterHeroesDetails from '../../components/FilterHeroesDetails';
import HeroeSelected from '../../components/HeroeSelected';
import { getHeroByDetail } from '../../store/actions/Heroes';

const Details = () => {
  const [heroFilter, setHeroFilter] = useState('');
  const { hero } = useSelector((state) => state.heroes);
  const [heroSelected, setHeroSelected] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (heroFilter) {
      dispatch(getHeroByDetail(heroFilter));
    }
  }, [heroFilter]);

  useEffect(() => {
    setHeroSelected(hero);
    if (hero.id) {
      const { id } = hero;
      history.push(`/details/${id}`, { id });
    } else {
      history.push(`/`);
    }
  }, [hero]);

  return (
    <Container>
      <Header>
        <FilterHeroesDetails setHeroFilter={setHeroFilter} history={history} />
      </Header>
      <Content>
        <HeroeSelected hero={heroSelected} />
      </Content>
    </Container>
  );
};

export default Details;
