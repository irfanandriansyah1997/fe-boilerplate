import { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import SectionTemplates from '../../components/templates/section';
import { SIDEBAR_MENU_CODE_SPLITTING_SECTION } from './constant';

const CodeSplittingPart1 = lazy(() => import(`./part-1`));
const CodeSplittingPart2 = lazy(() => import(`./part-2`));
const CodeSplittingPart3 = lazy(() => import(`./part-3`));

/**
 * Implement Code Splitting
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const CodeSpliting: FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          <Route path={`${match.url}/part-1`}>
            <CodeSplittingPart1 />
          </Route>
          <Route path={`${match.url}/part-2`}>
            <CodeSplittingPart2 />
          </Route>
          <Route path={`${match.url}/part-3`}>
            <CodeSplittingPart3 />
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
  CodeSpliting,
  SIDEBAR_MENU_CODE_SPLITTING_SECTION
);
