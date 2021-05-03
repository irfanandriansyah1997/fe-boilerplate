import { IConstruct, Routing } from '@/modules/routing';

import MainRouting from './routing/main.routing';

/**
 * Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @description for register all routing on this apps
 * @since 2021.02.28
 */
class Apps extends Routing {
  /**
   * Modules
   * @return {IConstruct[]}
   */
  get modules(): IConstruct[] {
    return [MainRouting];
  }
}

export default Apps;
