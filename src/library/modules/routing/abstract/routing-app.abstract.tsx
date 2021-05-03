import { PureComponent, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { IModuleStore } from 'redux-dynamic-modules';

import { Redux } from '@/modules/redux';
import { GenerateRouting } from '@/modules/routing/helper';
import { IRouteConstruct as Construct } from '@/modules/routing/interface';

/**
 * Routing App Abstract
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
export abstract class RoutingAPPAbstract extends PureComponent {
  public store: IModuleStore<any>;

  constructor(props: Record<string, unknown>) {
    super(props);
    this.store = Redux.singleton();
  }

  abstract get modules(): Construct[];

  /**
   * Render
   * @returns {ReactNode}
   */
  render(): ReactNode {
    return (
      <HashRouter>
        <Provider store={this.store}>{GenerateRouting(this.modules)}</Provider>
      </HashRouter>
    );
  }
}
