import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BodyList, ImgHero, HeroItem, InfosHero } from './styles';
import { getComics } from '../../store/actions/Heroes';

const ReleasesOfHeroes = ({ idHero, comicsByGet, history }) => {
  const { location } = history;
  const [comic, setComic] = useState([]);
  const dispatch = useDispatch();

  const { comicsBy } = useSelector((state) => state.heroes);

  useEffect(() => {
    if (idHero) {
      dispatch(getComics(idHero));
    } else {
      const { state } = location;
      if (state) {
        dispatch(getComics(state.id));
        setComic(comicsByGet);
      }
    }
  }, [comic]);

  return (
    <BodyList>
      <div>
        <h3>Últimos lançamentos</h3>
      </div>
      <HeroItem>
        {comicsBy && comicsBy.length > 0 ? (
          comicsBy.map((p) => {
            const { thumbnail } = p;
            const { path, extension } = thumbnail;
            return (
              <div key={p.id} title={p.title}>
                <ImgHero>
                  <img src={`${path}.${extension}`} alt={p.title} />
                </ImgHero>
                <InfosHero title={p.title}>{p.title}</InfosHero>
              </div>
            );
          })
        ) : (
          <div>
            <h2 style={{ textAlign: 'center' }}>Nenhuma HQ Encontrada.</h2>
          </div>
        )}
      </HeroItem>
    </BodyList>
  );
};

export default ReleasesOfHeroes;
