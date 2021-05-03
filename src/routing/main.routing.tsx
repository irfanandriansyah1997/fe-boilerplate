import { ReactNode } from 'react';
import Loadable from 'react-loadable';
import { Link } from 'react-router-dom';

import { ILoadableComponent } from '@/library/interface';
import { modules, subModules } from '@/modules/routing';
import { IRoutingModules } from '@/modules/routing/interface';

/**
 * Homepage Routing
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.02.28
 */
@modules()
class HomepageRouting implements IRoutingModules {
  /**
   * Render Basic Props
   * @param {ReactNode} children -  children props
   * @returns {ReactNode}
   */
  public render(children: ReactNode): ReactNode {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
            <Link to="/page-1">Other Page</Link>
          </li>
        </ul>
        {children}
      </div>
    );
  }

  /**
   * Page 1
   * @return {ILoadableComponent}
   */
  @subModules(`/page-1`)
  public login(): ILoadableComponent {
    return Loadable({
      loader: () => import(`@/pages/page-1`),
      loading: () => null
    });
  }

  /**
   * Homepage Page
   * @return {ILoadableComponent}
   */
  @subModules(`/`)
  public index(): ILoadableComponent {
    return Loadable({
      loader: () => import(`@/pages/homepage`),
      loading: () => null
    });
  }
}

export default HomepageRouting;
