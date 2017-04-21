//import React from 'react'
var React = require('react');
import { render } from 'react-dom'
var Routes = require('./components/Routes');
import {
  BrowserRouter as Router,
} from 'react-router-dom';

render(
  <Router>
    <Routes></Routes>
  </Router>
  ,
  document.getElementById('pageindex')
);
