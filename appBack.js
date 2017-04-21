//import React from 'react'
var React = require('react');
var Routes = require('./components/Routes');
import {
  StaticRouter as Router,
} from 'react-router-dom';

class AppBack extends React.Component {
  render() {
    var context = {};
    return (
      <Router location={this.props.url} context={context}>
        <Routes></Routes>
      </Router>
      );
  }
}

export default AppBack;
module.exports = AppBack;