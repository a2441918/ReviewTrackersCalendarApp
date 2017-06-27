/*import React from 'react';
import Google from '../img/google.png';
import Alaska from '../img/alaska.jpg';
import Styles from '../scss/app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p><img src={Google} alt="Google" /></p>
        <p><img src={Alaska} width="300" alt="Alaska" /></p>
        <p>Hellokk</p>
        <div className={Styles.box}>
          Moduled scss class
        </div>
      </div>
    );
  }
}*/

/*import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Redirect, IndexRoute, browserHistory } from "react-router";

// Routes
const Routes = () => (
    <Router history={browserHistory} onUpdate={logPageView}>
                
        <Route path="/" component={layoutDefault}>
            <IndexRoute component={Home} />
            <Route path="article/:slug" component={Article} />
        </Route>
        
        <Redirect from="*" to="/" />
    </Router>
)

ReactDOM.render(<Routes />, document.getElementById("app"));*/

/*import React, { Component } from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";
import Default from './layouts/Default';

import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Default}>
            <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
}

export default App;*/


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