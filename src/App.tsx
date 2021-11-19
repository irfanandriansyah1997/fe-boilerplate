import { lazy, memo, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './style/apps.css';
import Homepage from './section/homepage';

const CodeSplittingRouter = lazy(() => import(`./section/code-splitting`));
const UseMemoRouter = lazy(() => import(`./section/use-memo`));
const OptimizeContext = lazy(() => import(`./section/context`));
const SuspenseFetch = lazy(() => import(`./section/suspense-fetch`));

/**
 * Main Apps Routing
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/code-splitting">
            <Suspense fallback={null}>
              <CodeSplittingRouter />
            </Suspense>
          </Route>
          <Route path="/use-memo">
            <Suspense fallback={null}>
              <UseMemoRouter />
            </Suspense>
          </Route>
          <Route path="/context">
            <Suspense fallback={null}>
              <OptimizeContext />
            </Suspense>
          </Route>
          <Route path="/suspense-fetch">
            <Suspense fallback={null}>
              <SuspenseFetch />
            </Suspense>
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default memo(App);
