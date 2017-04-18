import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Navigation extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
        
          <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
               <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand page-scroll" to="/#page-top">SweetCake</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <Link to="index.html#page-top"></Link>
                    </li>
                    <li>
                        <Link className="page-scroll" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="page-scroll" to="/menu">Menu</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    );
  }
}

export default Navigation;