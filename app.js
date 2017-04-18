import React from 'react'
import PageIndex from './components/PageIndex'
import PageMenu from './components/PageMenu'
import PagePanier from './components/PagePanier'
import { render } from 'react-dom'

var Router      = ReactRouterDOM.BrowserRouter;
var Route       = ReactRouterDOM.Route;
var Link        = ReactRouterDOM.Link;

ReactDOM.render(
  (
  <Router>
    <div> 
        <Route path="./views/menu.html" component={PageMenu}/>
        <Route path="./views/panier.html" component={PagePanier}/>
        <Route path="/" component={PageIndex}/>
    </div>  
</Router>
),
  document.getElementById('pageindex')
);