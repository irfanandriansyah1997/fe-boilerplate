import { IRoutingItem } from '@/modules/routing/interface';

import 'reflect-metadata';

/**
 * Routing Modules Decorator
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export const RoutingModulesDecorator = (pathURL = ``): ClassDecorator => (
  target
): void => {
  Reflect.defineMetadata(`modules`, pathURL, target);

  if (!Reflect.hasMetadata(`submodules`, target)) {
    Reflect.defineMetadata(`submodules`, [], target);
  }
};

/**
 * Routing Sub Modules
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export const RoutingSubModulesDecorator = (
  pathURL: string
): MethodDecorator => (target, methodName: string | symbol): void => {
  const routes: IRoutingItem[] = [
    ...(Reflect.getMetadata(`submodules`, target.constructor) || []),
    {
      methodName,
      path: pathURL
    }
  ];

  Reflect.defineMetadata(`submodules`, routes, target.constructor);
};
