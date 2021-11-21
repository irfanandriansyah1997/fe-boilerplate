import { verifiedIsNotEmpty } from '@99/helper';
import { FC, Suspense, useEffect, useState } from 'react';

import AppsError from '../../../components/molecules/error-boundary';
import PokemonCard from '../../../components/molecules/pokemon-card';
import PokemonForm from '../../../components/organisms/pokemon-form';
import PokemonInfo from '../../../components/organisms/pokemon-info';
import { getPokemon } from '../../../graphql';
import { createResource } from '../../../helper';
import { IResourcePayload, NullAble } from '../../../interface/general';
import { IPokemonDetail } from '../../../interface/pokemon';
import styles from './styles/part-1.module.scss';

const pokemonResourceCache: Record<
  string,
  IResourcePayload<IPokemonDetail>
> = {};

/**
 * Create Pokemon Resource
 * @param {string} pokemonName - pokemon name
 * @returns {IResourcePayload<IPokemonDetail>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export const createPokemonResource = (
  pokemonName: string
): IResourcePayload<IPokemonDetail> =>
  createResource(getPokemon(pokemonName, false));

/**
 * Get Pokemon Source
 * @author Irfan Andriansyah <irfan@99.co>
 * @description for the data we can use cache object or fetch to graphql endpoint if data not exists on cache
 * @since 2021.11.21
 */
export const getPokemonSource = (
  pokemonName: string
): IResourcePayload<IPokemonDetail> => {
  const formattedName = pokemonName.toLowerCase();
  let result = pokemonResourceCache[formattedName];

  if (!verifiedIsNotEmpty(result)) {
    result = createPokemonResource(pokemonName);
    pokemonResourceCache[formattedName] = result;
  }

  return result;
};

/**
 * Part 1 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const CacheResourcePart1: FC = () => {
  const [pokemonName, setPokemonName] = useState<string>(``);
  const [pokemonResource, setPokemonResource] = useState<
    NullAble<IResourcePayload<IPokemonDetail>>
  >(undefined);

  useEffect(() => {
    if (!verifiedIsNotEmpty(pokemonName)) {
      setPokemonResource(undefined);
      return;
    }

    setPokemonResource(getPokemonSource(pokemonName));
  }, [pokemonName]);

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
    <div className={styles[`cache-resource`]}>
      <PokemonForm onSubmit={onSubmitPokemonName} pokemonName={pokemonName} />
      <AppsError onReset={onResetError} resetKeys={[pokemonName]}>
        <Suspense fallback={<PokemonCard.Fallback name={pokemonName} />}>
          {pokemonResource ? (
            <PokemonInfo resource={pokemonResource} />
          ) : (
            `Submit a pokemon`
          )}
        </Suspense>
      </AppsError>
    </div>
  );
};

export default CacheResourcePart1;
