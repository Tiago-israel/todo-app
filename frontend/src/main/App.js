import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery'
import '../../node_modules/popper.js/dist/popper'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../components/template/css/custom.css';

import React, { Component } from 'react';
import Menu from '../components/template/Menu'
import Routes from '../main/Routes'


export default class App extends Component {

  render() {
    return (
      <div>
        <Menu />
        <div className="container-fluid">
          <Routes />
        </div>
      </div>

    );
  }
}
