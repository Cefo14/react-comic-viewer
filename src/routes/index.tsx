import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={() => <div>TODO</div>} />
      <Route component={() => <h1> 404 </h1>} />
    </Switch>
  </Router>
);

export default Routes;
