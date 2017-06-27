import React, { Component } from 'react';
import Google from '../../../img/google.png';
import Alaska from '../../../img/alaska.jpg';

import Styles from '../../../scss/views/home';

export default class extends Component {
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>
          Base64 data:image<br />
          <img src={Google} alt="Google" />
        </p>
        <p>
          Standard src img<br />
          <img src={Alaska} width="300" alt="Alaska" />
        </p>
        <div className={Styles.module}>I'm a moduled CSS class. Check me out in /scss/views/home.scss.</div>
        <p className="global">I'm a global CSS class. Check me out in /scss/app.scss.</p>
      </div>
    )
  }
    
}