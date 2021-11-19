import { verifiedIsNotEmpty } from '@99/helper';

import { translateGraphqlToPokemon } from '../helper';
import { Query } from '../interface/generated/graphql';
import { IPokemonDetail } from '../interface/pokemon';
import { getGraphqlQuery } from './helper';
import { POKEMON_DETAIL_QUERY } from './query';

/**
 * Get Pokemon From Graphql
 * @param {string} pokemonName - pokemon name
 * @returns {Promise<IPokemonDetail>}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export const getPokemon = async (
  pokemonName: string
): Promise<IPokemonDetail> =>
  getGraphqlQuery<Pick<Query, 'pokemon'>>(POKEMON_DETAIL_QUERY, {
    name: pokemonName.toLowerCase()
  }).then((response) => {
    const pokemonPayload = translateGraphqlToPokemon(response);

    if (verifiedIsNotEmpty(pokemonPayload)) {
      return pokemonPayload as IPokemonDetail;
    }

    return Promise.reject(new Error(`Data Not Found`));
  });
