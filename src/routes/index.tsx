import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const Home = lazy(() => import('../containers/Home'));
const Viewer = lazy(() => import('../containers/Viewer'));

const Loading = () => (
  <div>Loading...</div>
);

const Routes = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Viewer} />
        <Route component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
