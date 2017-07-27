import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import '../scss/app';

import Primary from './partials/navigation/primary';
import Home from './views/Home';
import About from './views/About';
import NotFound from './views/NotFound';

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Primary />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
  
}