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

/**
 * Create Pokemon Resource
 * @param {string} pokemonName - pokemon name
 * @returns {IResourcePayload<IPokemonDetail>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export const createPokemonResource = (
  pokemonName: string
): IResourcePayload<IPokemonDetail> => createResource(getPokemon(pokemonName));

/**
 * Part 1 Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const RenderAsYouFetchPart1: FC = () => {
  const [pokemonName, setPokemonName] = useState<string>(`Pikachu`);
  const [pokemonResource, setPokemonResource] = useState<
    NullAble<IResourcePayload<IPokemonDetail>>
  >(undefined);

  useEffect(() => {
    if (!verifiedIsNotEmpty(pokemonName)) {
      setPokemonResource(undefined);
      return;
    }

    setPokemonResource(createPokemonResource(pokemonName));
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
    <div className={styles[`render-as-you-fetch`]}>
      <PokemonForm onSubmit={onSubmitPokemonName} pokemonName={pokemonName} />
      <AppsError onReset={onResetError} resetKeys={[pokemonName]}>
        <Suspense fallback={<PokemonCard.Fallback name="pikachu" />}>
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

export default RenderAsYouFetchPart1;
