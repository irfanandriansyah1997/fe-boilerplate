import { FC, lazy } from 'react';

import { IPokemonInfoWithResourceProps } from './interface';

const PokemonCard = lazy(() => import(`../../molecules/pokemon-card`));

/**
 * Pokemon Info Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
const PokemonInfoWithResource: FC<IPokemonInfoWithResourceProps> = ({
  resource: { data, image },
  type
}) => {
  const pokemon = data.read();
  const pokemonImage = image.read();

  return <PokemonCard {...pokemon} media={pokemonImage} type={type} />;
};

export default PokemonInfoWithResource;
