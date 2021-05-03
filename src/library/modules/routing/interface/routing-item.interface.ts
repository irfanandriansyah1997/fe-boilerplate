import { FC } from 'react';

/**
 * Routing Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export interface IRoutingItem {
  methodName: string;
  path: string;
}

/**
 * Routing Item Handler
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export type IRoutingItemHandler = Record<string, () => FC>;
