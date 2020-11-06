import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo/Group.png';
import lupa from '../../assets/busca/Lupa/Shape.png';
import { HeaderTitle } from './styles';
import { getHeroByDeatil } from '../../store/actions/Heroes';

const FilterHeroesDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { hero } = useSelector((state) => state.heroes);

  const filteringHero = (params) => {
    dispatch(getHeroByDeatil(params));
    const heroSetted = hero.lenght > 0 ? hero[0] : '';
    if (heroSetted) {
      const { id } = heroSetted;
      history.push(`/details/${id}`, { id });
    }
  };

  return (
    <HeaderTitle>
      <img src={logo} alt="Logo da marvel" />
      <div>
        <img src={lupa} alt="lupa" />
        <input
          type="text"
          placeholder="Procures por heróis"
          onChange={(e) => filteringHero(e.target.value)}
        />
      </div>
    </HeaderTitle>
  );
};

export default FilterHeroesDetails;
