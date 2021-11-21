import { bulkVerifiedIsNotEmpty, verifiedIsNotEmpty } from '@99/helper';

import { NullAble } from '../interface/general';
import {
  Attack,
  Maybe,
  Pokemon,
  PokemonAttack,
  Query
} from '../interface/generated/graphql';
import { IPokemonAttack, IPokemonDetail } from '../interface/pokemon';

/**
 * Translate Graphql To Pokemon Attack Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export const translateGraphqlToPokemonAttackItem = (
  attack: Maybe<Attack>
): NullAble<IPokemonAttack> => {
  if (attack) {
    const { damage, name, type } = attack;

    if (bulkVerifiedIsNotEmpty([damage, name, type])) {
      return {
        damage: damage as number,
        name: name as string,
        type: type as string
      };
    }
  }

  return undefined;
};

/**
 * Translate Graphql To Pokemon Attack
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export const translateGraphqlToPokemonAttack = (
  pokemonAttack: Maybe<PokemonAttack> | undefined
): IPokemonAttack[] => {
  if (pokemonAttack) {
    const { special } = pokemonAttack;

    return (special || [])
      .filter(verifiedIsNotEmpty)
      .map(translateGraphqlToPokemonAttackItem)
      .filter(verifiedIsNotEmpty) as IPokemonAttack[];
  }

  return [];
};

/**
 * Generate Pokemon Pictures
 * @param {NullAble<string>} pokemonName - pokemon name
 * @returns {string}
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.21
 */
export const genPokemonPictures = (pokemonName: NullAble<string>): string =>
  `https://react-suspense.netlify.app/img/pokemon/${pokemonName?.toLowerCase()}.jpg`;

/**
 * Translatr Graphql To Pokemon
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export const translateGraphqlToPokemon = ({
  pokemon
}: Pick<Query, 'pokemon'>): NullAble<IPokemonDetail> => {
  if (verifiedIsNotEmpty(pokemon)) {
    const { attacks, name, number } = pokemon as Pokemon;

    if (bulkVerifiedIsNotEmpty([number, name, attacks])) {
      return {
        attack: translateGraphqlToPokemonAttack(attacks),
        media: `https://react-suspense.netlify.app/img/pokemon/${name?.toLowerCase()}.jpg`,
        name: name as string,
        number: `#${number}`
      };
    }
  }

  return undefined;
};
