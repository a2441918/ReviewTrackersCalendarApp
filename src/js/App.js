import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

// import '../scss/app';

import Home from './index';

export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
  
}