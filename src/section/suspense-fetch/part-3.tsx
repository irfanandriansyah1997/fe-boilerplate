import { FC, Suspense } from 'react';

import AppsError from '../../components/molecules/error-boundary';
import PokemonCard from '../../components/molecules/pokemon-card';
import { getPokemon } from '../../graphql';
import styles from './style/part-1.module.scss';
import { createResource } from './helper';

const pokemonResource = createResource(getPokemon(`pikachu`));

/**
 * Pokemon Card Part 3
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const PokemonCardPart3: FC = () => {
  const pokemon = pokemonResource.read();

  return <PokemonCard {...pokemon} />;
};

/**
 * Part 3 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const SuspenseFetchPart3: FC = () => (
  <div className={styles[`suspense-fetch`]}>
    <AppsError>
      <Suspense fallback={<PokemonCard.Fallback name="pikachu" />}>
        <PokemonCardPart3 />
      </Suspense>
    </AppsError>
  </div>
);

export default SuspenseFetchPart3;
