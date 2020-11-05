/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo/Group.png';
import lupa from '../../assets/busca/Lupa/Shape.png';
import { getAllHeroes } from '../../store/actions/Heroes';
import { HeaderTitle } from './styles';

const FilterHeroes = () => {
  const dispatch = useDispatch();
  return (
    <HeaderTitle>
      <img src={logo} alt="Logo da marvel" />
      <h1>EXPLORE O UNIVERSO</h1>
      <h4>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </h4>
      <div>
        <img src={lupa} alt="lupa" />
        <input
          type="text"
          placeholder="Procure por heróis"
          onChange={(e) => dispatch(getAllHeroes(e.target.value))}
        />
      </div>
    </HeaderTitle>
  );
};

export default FilterHeroes;
