import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
