import React from 'react'
import PageIndex from './components/PageIndex'
import PageMenu from './components/PageMenu'
import PagePanier from './components/PagePanier'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

render(
  (
  <Router>
    <div> 
        <Route path="/panier" component={PagePanier}/>
        <Route path="/menu" component={PageMenu}/>
        <Route exact path="/" component={PageIndex}/>
    </div>  
</Router>

),
  document.getElementById('pageindex')
);