import { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CodeSpliting from './code-splitting';

/**
 * Performance Routing Apps
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const PerformanceRouting: FC = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/code-spliting`}>
        <CodeSpliting />
      </Route>
    </Switch>
  );
};

export default PerformanceRouting;
