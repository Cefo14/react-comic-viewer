import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Home = lazy(() => import('../containers/Home'));

const Loading = () => (
  <div>Loading...</div>
);

const Routes = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={() => <h1> 404 </h1>} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
