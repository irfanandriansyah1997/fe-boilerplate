import { FC, Suspense } from 'react';

import { getPokemon } from '../../graphql';
import { NullAble } from '../../interface/general';
import { IPokemonDetail } from '../../interface/pokemon';
import PokemonCard from './component/pokemon-card';
import styles from './style/part-1.module.scss';

let pokemon: NullAble<IPokemonDetail>;
let pokemonError: NullAble<Error>;
const pokemonPromise = getPokemon(`pikachu`).then(
  (p): void => {
    pokemon = p;
  },
  (e) => {
    if (e instanceof Error) pokemonError = e;
  }
);

/**
 * Pokemon Card Part 1
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const PokemonCardPart1: FC = () => {
  if (!pokemon) throw pokemonPromise;
  if (pokemonError) throw pokemonError;

  return <PokemonCard {...pokemon} />;
};

/**
 * Part 1 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.11.17
 */
const SuspenseFetchPart1: FC = () => (
  <div className={styles[`suspense-fetch`]}>
    <Suspense fallback={<div>Loading Pokemon...</div>}>
      <PokemonCardPart1 />
    </Suspense>
  </div>
);

export default SuspenseFetchPart1;
