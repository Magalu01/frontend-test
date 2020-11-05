import React from 'react';
import teste from '../../assets/star-lord.jpeg';
import { BodyList, ImgHero, HeroItem, InfosHero } from './styles';

const ReleasesOfHeroes = () => {
  return (
    <BodyList>
      <h4>Últimos lançamentos</h4>
      <HeroItem>
        <ImgHero>
          <img src={teste} alt="star-lord" />
        </ImgHero>
        <InfosHero>
          <h4>Star- Lord</h4>
        </InfosHero>
      </HeroItem>
      <HeroItem>
        <ImgHero>
          <img src={teste} alt="star-lord" />
        </ImgHero>
        <InfosHero>
          <h4>Star- Lord</h4>
        </InfosHero>
      </HeroItem>
      <HeroItem>
        <ImgHero>
          <img src={teste} alt="star-lord" />
        </ImgHero>
        <InfosHero>
          <h4>Star- Lord</h4>
        </InfosHero>
      </HeroItem>
      <HeroItem>
        <ImgHero>
          <img src={teste} alt="star-lord" />
        </ImgHero>
        <InfosHero>
          <h4>Star- Lord</h4>
        </InfosHero>
      </HeroItem>
    </BodyList>
  );
};

export default ReleasesOfHeroes;

// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-key */
// import React from 'react';
// import teste from '../../assets/star-lord.jpeg';
// import { BodyList, ImgHero, HeroItem, InfosHero } from './styles';

// const ReleasesOfHeroes = ({ comics }) => {
//   return (
//     <BodyList>
//       <h4>Últimos lançamentos</h4>
//       <HeroItem>
//         {comics && comics
//           ? comics.map((c) => (
//               <div>
//                 <ImgHero>
//                   <img src={teste} alt="star-lord" />
//                 </ImgHero>
//                 <InfosHero>
//                   <h4>Star- Lord</h4>
//                 </InfosHero>
//               </div>
//             ))
//           : ''}
//       </HeroItem>
//     </BodyList>
//   );
// };

// export default ReleasesOfHeroes;
