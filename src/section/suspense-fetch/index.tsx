import { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import SectionTemplates from '../../components/templates/section';
import { SIDEBAR_MENU_SUSPENSE_FETCH } from './constant';

const SuspenseFetchPart1 = lazy(() => import(`./part-1`));

/**
 * Implement Suspense Fetch Section
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const SuspenseFetch: FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Route path={`${match.url}/part-1`}>
            <Suspense fallback={null}>
              <SuspenseFetchPart1 />
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

export default SectionTemplates(SuspenseFetch, SIDEBAR_MENU_SUSPENSE_FETCH);
