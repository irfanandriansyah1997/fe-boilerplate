import { verifiedIsNotEmpty } from '@99/helper';
import { FC, lazy, Suspense, useEffect, useState } from 'react';

import AppsError from '../../../components/molecules/error-boundary';
import PokemonCard from '../../../components/molecules/pokemon-card';
import PokemonForm from '../../../components/organisms/pokemon-form';
import { getPokemon } from '../../../graphql';
import {
  createResource,
  genPokemonPictures,
  preloadImage
} from '../../../helper';
import { NullAble } from '../../../interface/general';
import styles from './styles/part-1.module.scss';
import { IPokemonCachePayload } from './interface';

const pokemonResourceCache: Record<string, IPokemonCachePayload> = {};

const PokemonInfoWithResource = lazy(
  () => import(`../../../components/organisms/pokemon-info-with-resource`)
);

/**
 * Create Pokemon Resource
 * @param {string} pokemonName - pokemon name
 * @returns {IPokemonCachePayload}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export const createPokemonResource = (
  pokemonName: string
): IPokemonCachePayload => {
  const data = createResource(getPokemon(pokemonName, false));
  const image = createResource(preloadImage(genPokemonPictures(pokemonName)));

  return { data, image };
};

/**
 * Get Pokemon Source
 * @author Irfan Andriansyah <irfan@99.co>
 * @description for the data we can use cache object or fetch to graphql endpoint if data not exists on cache
 * @since 2021.11.21
 */
export const getPokemonSource = (pokemonName: string): IPokemonCachePayload => {
  const formattedName = pokemonName.toLowerCase();
  let result = pokemonResourceCache[formattedName];

  if (!verifiedIsNotEmpty(result)) {
    result = createPokemonResource(pokemonName);
    pokemonResourceCache[formattedName] = result;
  }

  return result;
};

/**
 * Custom Hooks Pokemon Resource
 * @returns {NullAble<IPokemonCachePayload>}
 */
function usePokemonResource(
  pokemonName: string
): NullAble<IPokemonCachePayload> {
  const [pokemonResource, setPokemonResource] = useState<
    NullAble<IPokemonCachePayload>
  >(undefined);

  useEffect(() => {
    if (!verifiedIsNotEmpty(pokemonName)) {
      setPokemonResource(undefined);
      return;
    }

    setPokemonResource(getPokemonSource(pokemonName));
  }, [pokemonName]);

  return pokemonResource;
}

/**
 * Part 1 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const SuspenseCustomHooksPart1: FC = () => {
  const [pokemonName, setPokemonName] = useState<string>(``);
  const pokemonResource = usePokemonResource(pokemonName);

  /**
   * Event Handler When Reset Error
   * @returns {void}
   */
  const onResetError = (): void => {
    setPokemonName(``);
  };

  /**
   * Event Handler When User Submit New Pokemon Name
   * @param {string} newPokemonName - pokemon name
   * @returns {void}
   */
  const onSubmitPokemonName = (newPokemonName: string): void => {
    setPokemonName(newPokemonName);
  };

  return (
    <div className={styles[`suspense-image`]}>
      <PokemonForm onSubmit={onSubmitPokemonName} pokemonName={pokemonName} />
      {pokemonResource ? (
        <AppsError onReset={onResetError} resetKeys={[pokemonName]}>
          <Suspense fallback={<PokemonCard.Fallback name={pokemonName} />}>
            <PokemonInfoWithResource resource={pokemonResource} />
          </Suspense>
        </AppsError>
      ) : (
        `Submit a pokemon`
      )}
    </div>
  );
};

export default SuspenseCustomHooksPart1;
