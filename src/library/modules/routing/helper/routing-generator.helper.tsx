/* eslint-disable sort-exports/sort-exports */
import { FC, ReactNode } from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  IRouteConstruct,
  IRoutingItem,
  IRoutingItemHandler
} from '@/modules/routing/interface';

/**
 * Generate Routing Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export const GenerateRoutingItem = (
  modules: unknown,
  routes: IRoutingItem[],
  urlPath: string
): ReactNode => (
  <Switch>
    {routes.map(({ methodName, ...res }) => {
      const Component: FC = ((modules as unknown) as IRoutingItemHandler)[
        methodName
      ]();

      return (
        <Route exact path={`${urlPath}${res.path}`} key={res.path}>
          <Component />
        </Route>
      );
    })}
  </Switch>
);

/**
 * Generate Routing
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export const GenerateRouting = (modules: IRouteConstruct[]): ReactNode => (
  <Switch>
    {modules.map((ModulesItem) => {
      const urlPath: string = Reflect.getMetadata(`modules`, ModulesItem);
      const routes: IRoutingItem[] =
        Reflect.getMetadata(`submodules`, ModulesItem) || [];
      const Modules = new ModulesItem();

      let content = GenerateRoutingItem(Modules, routes, urlPath);
      if (Modules.render) {
        content = Modules.render(content);
      }

      return (
        <Route path={urlPath} key={urlPath}>
          {content}
        </Route>
      );
    })}
  </Switch>
);
