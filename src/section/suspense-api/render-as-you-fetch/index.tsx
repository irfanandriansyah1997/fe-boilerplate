import { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import SectionTemplates from '../../../components/templates/section';
import { SIDEBAR_MENU_RENDER_AS_YOU_FETCH } from './constant';

const RenderAsYouFetchPart1 = lazy(() => import(`./part-1`));

/**
 * Implement Render As You Fetch Section
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.11.17
 */
const RenderAsYouFetch: FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Route path={`${match.url}/part-1`}>
            <Suspense fallback={null}>
              <RenderAsYouFetchPart1 />
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

export default SectionTemplates(
  RenderAsYouFetch,
  SIDEBAR_MENU_RENDER_AS_YOU_FETCH
);
