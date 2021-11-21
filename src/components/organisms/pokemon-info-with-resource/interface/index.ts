import { IPokemonCachePayload } from '../../../../section/suspense-api/suspense-image/interface';
import { IPokemonCardTypeEnum } from '../../../molecules/pokemon-card/interface';

/**
 * Pokemon Info With Resource Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.19
 */
export interface IPokemonInfoWithResourceProps {
  resource: IPokemonCachePayload;
  type?: IPokemonCardTypeEnum;
}
