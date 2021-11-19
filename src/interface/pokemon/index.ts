import { ReactText } from 'react';

/**
 * Pokemon Detail Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
export interface IPokemonDetail {
  attack: IPokemonAttack[];
  media: string;
  name: string;
  number: ReactText;
}

/**
 * Pokemon Attack Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2021.11.17
 */
export interface IPokemonAttack {
  damage: number;
  name: string;
  type: string;
}
