import { IResourcePayload } from '../../../../interface/general';
import { IPokemonDetail } from '../../../../interface/pokemon';

/**
 * Pokemon Info Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export interface IPokemonInfoProps {
  lazyLoadImages?: boolean;
  resource: IResourcePayload<IPokemonDetail>;
}
