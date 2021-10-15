import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './style/apps.css';
import Header from './components/organisms/header';
import { DEFAULT_HEADER } from './components/organisms/header/constant';
import CodeSplittingRouter from './section/code-splitting';
import Homepage from './section/homepage';

/**
 * Main Apps Routing
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
function App() {
  return (
    <div style={{ paddingTop: 115 }}>
      <Router>
        <Header menu={DEFAULT_HEADER} />
        <Switch>
          <Route path="/code-splitting">
            <CodeSplittingRouter />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
