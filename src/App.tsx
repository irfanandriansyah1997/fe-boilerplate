import { lazy, memo, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './style/apps.css';
import Homepage from './section/homepage';

const CodeSplittingRouter = lazy(
  () => import(`./section/performance/code-splitting`)
);
const UseMemoRouter = lazy(() => import(`./section/performance/use-memo`));
const OptimizeContext = lazy(() => import(`./section/performance/context`));
const SuspenseFetch = lazy(
  () => import(`./section/suspense-api/suspense-fetch`)
);
const RenderAsYouFetch = lazy(
  () => import(`./section/suspense-api/render-as-you-fetch`)
);
const CacheResource = lazy(
  () => import(`./section/suspense-api/cache-resource`)
);
const SuspenseImage = lazy(
  () => import(`./section/suspense-api/suspense-image`)
);
const SuspenseCustomHooks = lazy(
  () => import(`./section/suspense-api/suspense-custom-hooks`)
);

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
          <Route path="/render-as-you-fetch">
            <Suspense fallback={null}>
              <RenderAsYouFetch />
            </Suspense>
          </Route>
          <Route path="/cache-resource">
            <Suspense fallback={null}>
              <CacheResource />
            </Suspense>
          </Route>
          <Route path="/suspense-image">
            <Suspense fallback={null}>
              <SuspenseImage />
            </Suspense>
          </Route>
          <Route path="/suspense-custom-hooks">
            <Suspense fallback={null}>
              <SuspenseCustomHooks />
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
