import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import { Navbar, Footer } from './components';
import { Home, Products, Services, SignUp } from './pages';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/services'>
            <Services />
          </Route>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
