import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './style/apps.css';
import PerformanceRouting from './section/performance';

/**
 * Main Apps Routing
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
function App() {
  return (
    <div
      style={{
        alignItems: `center`,
        display: `flex`,
        justifyContent: `center`,
        padding: 20
      }}
    >
      <Router>
        <Switch>
          <Route path="/performance">
            <PerformanceRouting />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
