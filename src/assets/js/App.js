import React, { Component } from 'react';
import Google from '../img/google.png';
import Alaska from '../img/alaska.jpg';
import Styles from '../scss/app.scss';

export default class App extends Component {
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
}