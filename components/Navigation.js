import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          { /* Brand and toggle get grouped for better mobile display */ }
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">SweetCake</a>
          </div>
          { /* Collect the nav links, forms, and other content for toggling */ }
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden">
                <a href="#page-top" />
              </li>
              <li>
                <a className="page-scroll" href="index.html">Home</a>
              </li>
              <li>
                <a className="page-scroll" href="menu.html">Menu</a>
              </li>
            </ul>
          </div>
          { /* /.navbar-collapse */ }
        </div>
        { /* /.container-fluid */ }
      </nav>
      );
  }
}

export default Navigation;