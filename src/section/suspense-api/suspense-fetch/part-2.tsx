import { FC, Suspense } from 'react';

import AppsError from '../../../components/molecules/error-boundary';
import PokemonCard from '../../../components/molecules/pokemon-card';
import { getPokemon } from '../../../graphql';
import { NullAble } from '../../../interface/general';
import { IPokemonDetail } from '../../../interface/pokemon/index';
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
 * Pokemon Card Part 2
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const PokemonCardPart2: FC = () => {
  if (pokemonError) throw pokemonError;
  if (!pokemon) throw pokemonPromise;

  return <PokemonCard {...pokemon} />;
};

/**
 * Part 2 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const SuspenseFetchPart2: FC = () => (
  <div className={styles[`suspense-fetch`]}>
    <AppsError>
      <Suspense fallback={<div>Loading Pokemon...</div>}>
        <PokemonCardPart2 />
      </Suspense>
    </AppsError>
  </div>
);

export default SuspenseFetchPart2;
