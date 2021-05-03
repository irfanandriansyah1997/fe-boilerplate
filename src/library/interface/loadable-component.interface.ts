import { ComponentClass, FunctionComponent } from 'react';
import { LoadableComponent } from 'react-loadable';

/**
 * Loadable Component Type
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.03.01
 */
export type ILoadableComponent =
  | (FunctionComponent & LoadableComponent)
  | (ComponentClass & LoadableComponent);
