import { FC, lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import SectionTemplates from '../../components/templates/section';
import { SIDEBAR_MENU_USE_MEMO_SECTION } from './constant';

const UseMemoPart1 = lazy(() => import(`./part-1`));
const UseMemoPart2 = lazy(() => import(`./part-2`));

/**
 * Implement Use Memo Section
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.28
 */
const UseMemo: FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Route path={`${match.url}/part-1`}>
            <UseMemoPart1 />
          </Route>
          <Route path={`${match.url}/part-2`}>
            <UseMemoPart2 />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default SectionTemplates(UseMemo, SIDEBAR_MENU_USE_MEMO_SECTION);
