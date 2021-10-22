import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './style/apps.css';
import CodeSplittingRouter from './section/code-splitting';
import Homepage from './section/homepage';

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
