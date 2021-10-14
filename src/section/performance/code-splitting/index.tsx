import { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CodeSplittingPart1 from './part-1';

/**
 * Implement Code Splitting
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const CodeSpliting: FC = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/part-1`}>
        <CodeSplittingPart1 />
      </Route>
      <Route path={`${match.url}`}>
        <CodeSplittingPart1 />
      </Route>
    </Switch>
  );
};

export default CodeSpliting;
