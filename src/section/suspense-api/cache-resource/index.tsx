import { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import SectionTemplates from '../../../components/templates/section';
import { SIDEBAR_MENU_CACHE_RESOURCE } from './constant';

const CacheResourcePart1 = lazy(() => import(`./part-1`));
const CacheResourcePart2 = lazy(() => import(`./part-2`));
const CacheResourcePart3 = lazy(() => import(`./part-3`));
const CacheResourcePart4 = lazy(() => import(`./part-4`));

/**
 * Implement Render As You Fetch Section
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const CacheResource: FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Route path={`${match.url}/part-1`}>
            <Suspense fallback={null}>
              <CacheResourcePart1 />
            </Suspense>
          </Route>
          <Route path={`${match.url}/part-2`}>
            <Suspense fallback={null}>
              <CacheResourcePart2 />
            </Suspense>
          </Route>
          <Route path={`${match.url}/part-3`}>
            <Suspense fallback={null}>
              <CacheResourcePart3 />
            </Suspense>
          </Route>
          <Route path={`${match.url}/part-4`}>
            <Suspense fallback={null}>
              <CacheResourcePart4 />
            </Suspense>
          </Route>
          <Route exact path={`${match.url}`}>
            <Redirect to={`${match.url}/part-1`} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default SectionTemplates(CacheResource, SIDEBAR_MENU_CACHE_RESOURCE);
