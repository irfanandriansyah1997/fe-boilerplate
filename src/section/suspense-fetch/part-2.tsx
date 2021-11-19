import { FC, Suspense } from 'react';

import AppsError from '../../components/molecules/error-boundary';
import { getPokemon } from '../../graphql';
import { NullAble } from '../../interface/general';
import { IPokemonDetail } from '../../interface/pokemon';
import PokemonCard from './component/pokemon-card';
import styles from './style/part-1.module.scss';

let pokemon: NullAble<IPokemonDetail>;
let pokemonError: NullAble<Error>;
const pokemonPromise = getPokemon(`pikacha`).then(
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
