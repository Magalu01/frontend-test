import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHeroes } from '../../store/actions/Home';

import { Container, Header, HeaderTitle, Content } from './styles';
import logo from '../../assets/logo/Group.png';
import lupa from '../../assets/busca/Lupa/Shape.png';

const Home = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  console.log(selector);

  useEffect(() => {
    dispatch(getAllHeroes());
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          <img src={logo} alt="Logo da marvel" />
          <h1>EXPLORE O UNIVERSO</h1>
          <h4>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve!
          </h4>
          <div>
            <img src={lupa} alt="lupa" />
            <input type="text" placeholder="Busque por heróis" />
          </div>
        </HeaderTitle>
      </Header>
      <Content />
    </Container>
  );
};

export default Home;
