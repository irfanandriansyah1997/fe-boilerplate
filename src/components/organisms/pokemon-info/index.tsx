import { FC, lazy } from 'react';

import { IPokemonInfoProps } from './interface';

const PokemonCard = lazy(() => import(`../../molecules/pokemon-card`));

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
