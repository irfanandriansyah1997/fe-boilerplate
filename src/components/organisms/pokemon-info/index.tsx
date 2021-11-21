import { FC, lazy } from 'react';

import { IPokemonInfoProps } from './interface';

const PokemonCard = lazy(() => import(`../../molecules/pokemon-card`));

/**
 * Pokemon Info Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const PokemonInfo: FC<IPokemonInfoProps> = ({ resource, type }) => {
  const pokemon = resource.read();

  return <PokemonCard {...pokemon} type={type} />;
};

export default PokemonInfo;
