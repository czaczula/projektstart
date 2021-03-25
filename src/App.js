import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home.js';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn.js';
import LogOut from './components/Register/LogOut.js';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />  
          <Route exact path="/logout" component={LogOut} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
  );
}
export default App;
