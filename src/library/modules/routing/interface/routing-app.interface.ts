import { IRoutingModules } from './routing-modules.interface';

/**
 * Routing Apps Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export interface IRoutingApps {
  getModules(): IRoutingModules[];
}
