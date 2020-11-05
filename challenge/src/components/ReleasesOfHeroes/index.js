/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BodyList, ImgHero, HeroItem, InfosHero } from './styles';
import { getComics } from '../../store/actions/Heroes';

// eslint-disable-next-line consistent-return
const ReleasesOfHeroes = ({ idHero, comicsByGet }) => {
  const [comic, setComic] = useState([]);
  const dispatch = useDispatch();

  const { comicsBy } = useSelector((state) => state.heroes);

  useEffect(() => {
    if (idHero) {
      dispatch(getComics(idHero));
    } else {
      setComic(comicsByGet);
    }
  }, [comic]);

  return (
    <BodyList>
      <div>
        <h4>Últimos lançamentos</h4>
      </div>
      <HeroItem>
        {comicsBy && comicsBy.length > 0
          ? comicsBy.map((p) => {
              const { thumbnail } = p;
              const { path, extension } = thumbnail;
              return (
                <div>
                  <ImgHero>
                    <img src={`${path}.${extension}`} alt={p.title} />
                  </ImgHero>
                  <InfosHero>
                    <h4>{p.title}</h4>
                  </InfosHero>
                </div>
              );
            })
          : []}
      </HeroItem>
    </BodyList>
  );
};

export default ReleasesOfHeroes;
