import { FC } from 'react';

import { IPokemonDetail } from '../../../../interface/pokemon';

/**
 * Pokemon Card Fallback Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export interface IPokemonCardFallbackProps {
  name: string;
}

/**
 * Pokemon Card Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export type IPokemonCard = FC<IPokemonDetail> & {
  Fallback: FC<IPokemonCardFallbackProps>;
};
