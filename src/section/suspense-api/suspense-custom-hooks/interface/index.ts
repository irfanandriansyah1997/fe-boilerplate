import { IResourcePayload } from '../../../../interface/general';
import { IPokemonDetail } from '../../../../interface/pokemon';

/**
 * Pokemon Cache Payload Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.21
 */
export interface IPokemonCachePayload {
  data: IResourcePayload<IPokemonDetail>;
  image: IResourcePayload<string>;
}

/**
 * Pokemon Cache Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.21
 */
export type IPokemonCache = (pokemonName: string) => IPokemonCachePayload;

/**
 * Pokemon Provider Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.21
 */
export interface IPokemonProviderProps {
  cacheTime?: number;
}
