import React from 'react';
import PageIndex from './PageIndex'
import PageMenu from './PageMenu'
import PagePanier from './PagePanier'
import {
  Route,
  Link
} from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
            <div> 
                <Route path="/panier" component={PagePanier}/>
                <Route path="/menu" component={PageMenu}/>
                <Route exact path="/" component={PageIndex}/>
            </div>  
      );
  }
}

export default Routes;
module.exports = Routes;