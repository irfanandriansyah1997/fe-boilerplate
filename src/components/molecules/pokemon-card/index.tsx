import { FC } from 'react';

import Image from '../../atomic/image/image-default.component';
import ImageLazy from '../../atomic/image/image-lazy.component';
import styles from './style/style.module.scss';
import {
  IPokemonCard,
  IPokemonCardFallbackProps,
  IPokemonCardTypeEnum
} from './interface';

/**
 * Pokemon Card Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const PokemonCard: IPokemonCard = ({
  attack,
  media,
  name,
  number,
  type = IPokemonCardTypeEnum.basic
}) => (
  <div className={styles[`pokemon-card`]}>
    <div className={styles[`pokemon-card__images`]}>
      {type === IPokemonCardTypeEnum.basic ? (
        <Image src={media} alt={name} />
      ) : (
        <ImageLazy src={media} alt={name} />
      )}
    </div>
    <h2>
      {name}
      <span>{number}</span>
    </h2>
    <ul className={styles[`pokemon-card__list`]}>
      {attack.map(({ damage, name, type }) => (
        <li key={`${damage}-${name}-${type}`}>
          <h6>{name}</h6>
          <p>{damage > 0 ? damage : `XX`}</p>
          <span>{type}</span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Pokemon Card Fallback
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const PokemonCardFallback: FC<IPokemonCardFallbackProps> = ({ name }) => (
  <PokemonCard
    name={name}
    attack={[
      {
        damage: 0,
        name: `Loading Attack 1`,
        type: `Type`
      },
      {
        damage: 0,
        name: `Loading Attack 2`,
        type: `Type`
      }
    ]}
    number="XX"
    media={`${process.env.REACT_APP_FALLBACK_POKEMON_URL}`}
  />
);

PokemonCard.Fallback = PokemonCardFallback;

export default PokemonCard;
