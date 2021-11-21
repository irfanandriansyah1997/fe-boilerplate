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
 * Pokemon Card Type Enum
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.21
 */
export enum IPokemonCardTypeEnum {
  basic = 0,
  lazyLoadImage = 1
}

/**
 * Pokemon Card Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export interface IPokemonCardProps extends IPokemonDetail {
  type?: IPokemonCardTypeEnum;
}

/**
 * Pokemon Card Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export type IPokemonCard = FC<IPokemonCardProps> & {
  Fallback: FC<IPokemonCardFallbackProps>;
};
