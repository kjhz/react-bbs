import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './component/Login';
import Home from './component/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/posts" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
