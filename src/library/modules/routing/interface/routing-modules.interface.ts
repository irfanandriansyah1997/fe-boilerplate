import { ReactNode } from 'react';

/**
 * Routing Modules Construct
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export interface IRouteConstruct {
  new (): IRoutingModules;
}

/**
 * Routing Modules Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export type IRoutingModules = {
  render?: (children: ReactNode) => ReactNode;
};
