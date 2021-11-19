import { FC } from 'react';

import { IPokemonDetail } from '../../../../interface/pokemon';
import styles from './style/style.module.scss';

/**
 * Pokemon Card Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const PokemonCard: FC<IPokemonDetail> = ({ attack, media, name, number }) => (
  <div className={styles[`pokemon-card`]}>
    <div className={styles[`pokemon-card__images`]}>
      <img src={media} alt={name} />
    </div>
    <h2>
      {name}
      <span>{number}</span>
    </h2>
    <ul className={styles[`pokemon-card__list`]}>
      {attack.map(({ damage, name, type }) => (
        <li key={`${damage}-${name}-${type}`}>
          <h6>{name}</h6>
          <p>{damage}</p>
          <span>{type}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PokemonCard;
