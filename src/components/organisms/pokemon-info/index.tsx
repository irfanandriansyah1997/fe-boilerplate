import { FC } from 'react';

import PokemonCard from '../../molecules/pokemon-card';
import { IPokemonInfoProps } from './interface';

/**
 * Pokemon Info Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const PokemonInfo: FC<IPokemonInfoProps> = ({ lazyLoadImages, resource }) => {
  const pokemon = resource.read();

  return <PokemonCard lazyLoadImages={lazyLoadImages} {...pokemon} />;
};

export default PokemonInfo;
