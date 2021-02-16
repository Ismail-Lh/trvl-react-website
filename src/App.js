import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components';
import { Home } from './pages';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
