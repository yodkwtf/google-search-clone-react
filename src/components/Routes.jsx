import { Switch, Route, Redirect } from 'react-router';
import SearchResults from './SearchResults';

const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          {/* Always stay/redirect to `search` route */}
          <Redirect to="/search" />
        </Route>

        {/* for all specified path. result only one component */}
        <Route exact path={['/search', '/images', '/videos', '/news']}>
          <SearchResults />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
