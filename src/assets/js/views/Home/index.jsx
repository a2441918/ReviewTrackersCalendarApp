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
          <strong>Base64 data:image</strong><br />
          <img src={Google} alt="Google" />
        </p>
        <p>
          <strong>Standard src img</strong><br />
          <img src={Alaska} width="300" alt="Alaska" />
        </p>
        <p className={Styles.module}>This is a css module class</p>
        <p className="global">This is a global css class</p>
      </div>
    )
  }
    
}