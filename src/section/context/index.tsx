import { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import SectionTemplates from '../../components/templates/section';
import { SIDEBAR_MENU_CONTEXT_SECTION } from './constant';

const ContextPart1 = lazy(() => import(`./part-1`));
const ContextPart2 = lazy(() => import(`./part-2`));
const ContextPart3 = lazy(() => import(`./part-3`));
const ContextPart4 = lazy(() => import(`./part-4`));
const ContextPart5 = lazy(() => import(`./part-5`));
const ContextPart6 = lazy(() => import(`./part-6`));

/**
 * Implement Context Value Splitting
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const ContextValue: FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Route path={`${match.url}/part-1`}>
            <ContextPart1 />
          </Route>
          <Route path={`${match.url}/part-2`}>
            <ContextPart2 />
          </Route>
          <Route path={`${match.url}/part-3`}>
            <ContextPart3 />
          </Route>
          <Route path={`${match.url}/part-4`}>
            <ContextPart4 />
          </Route>
          <Route path={`${match.url}/part-5`}>
            <ContextPart5 />
          </Route>
          <Route path={`${match.url}/part-6`}>
            <ContextPart6 />
          </Route>
          <Route exact path={`${match.url}`}>
            <Redirect to={`${match.url}/part-1`} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default SectionTemplates(ContextValue, SIDEBAR_MENU_CONTEXT_SECTION);
