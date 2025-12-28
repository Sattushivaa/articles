import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { Router, Switch, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>
  <Router>
    <Switch>
      <Route exact path='/'><App/></Route>
      <Route exact path='/signup'><Signup/></Route>
      <Route exact path='./login'><Login/></Route>
    </Switch>
  </Router>
</React.StrictMode>)