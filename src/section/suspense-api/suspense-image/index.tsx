import { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import SectionTemplates from '../../../components/templates/section';
import { SIDEBAR_MENU_SUSPENSE_IMAGE } from './constant';

const SuspenseImage1 = lazy(() => import(`./part-1`));
const SuspenseImage2 = lazy(() => import(`./part-2`));
const SuspenseImage3 = lazy(() => import(`./part-3`));

/**
 * Implement Suspanse Image Section
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const SuspanseImage: FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Route path={`${match.url}/part-1`}>
            <Suspense fallback={null}>
              <SuspenseImage1 />
            </Suspense>
          </Route>
          <Route path={`${match.url}/part-2`}>
            <Suspense fallback={null}>
              <SuspenseImage2 />
            </Suspense>
          </Route>
          <Route path={`${match.url}/part-3`}>
            <Suspense fallback={null}>
              <SuspenseImage3 />
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

export default SectionTemplates(SuspanseImage, SIDEBAR_MENU_SUSPENSE_IMAGE);
