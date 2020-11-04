import React from 'react';
import logo from '../../assets/logo/Group.png';
import lupa from '../../assets/busca/Lupa/Shape.png';
import { HeaderTitle } from './styles';

const FilterHeroesDetails = () => {
  return (
    <HeaderTitle>
      <img src={logo} alt="Logo da marvel" />
      <div>
        <img src={lupa} alt="lupa" />
        <input type="text" placeholder="Procures por heróis" />
      </div>
    </HeaderTitle>
  );
};

export default FilterHeroesDetails;
