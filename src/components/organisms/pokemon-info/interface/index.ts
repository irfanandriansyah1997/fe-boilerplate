import { IResourcePayload } from '../../../../interface/general';
import { IPokemonDetail } from '../../../../interface/pokemon';
import { IPokemonCardTypeEnum } from '../../../molecules/pokemon-card/interface';

/**
 * Pokemon Info Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export interface IPokemonInfoProps {
  resource: IResourcePayload<IPokemonDetail>;
  type?: IPokemonCardTypeEnum;
}
