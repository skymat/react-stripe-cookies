import React from 'react'
import Navigation from './Navigation';
import PaymentForm from './PaymentForm';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class PagePanier extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
        <div>Panier
       <Navigation />
        <div id="page-content">
          <div id="main-content">
              <div className="container panier">
                <h3><Link to="/menu"> -retour- </Link> Panier</h3>
                <div className="col-md-offset-2 col-md-8">
                    <div className="row">
                      <div className="col-lg-3 col-xs-12">
                          <div className="item-container">
                            <img src="images/menu-9.jpg" />
                          </div>
                      </div>
                      <div className="col-lg-3 col-xs-12">
                          <h3>$45</h3>
                      </div>
                    </div>
                     <PaymentForm></PaymentForm>
                </div>
              </div>
          </div>
        </div>
        <Footer></Footer>

      </div>
    );
  }
}

export default PagePanier;