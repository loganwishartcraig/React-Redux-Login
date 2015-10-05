import React, { Component, propTypes } from 'react';

import { LoginModule } from './LoginContainer' 


export default class App extends Component {

  render() {


    if (window.sessionStorage.token) {
      return(<h1 className={'welc--header--lg'}>YOU'RE LOGGED IN!</h1>);
    } else {
    return(<LoginModule/>);
    }
  }

}


