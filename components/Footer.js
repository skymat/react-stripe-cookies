import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p>Copyright 2015</p>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li><a href="#"><i className="fa fa-twitter" /></a>
                  </li>
                  <li><a href="#"><i className="fa fa-facebook" /></a>
                  </li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a>
                  </li>
                  <li><a href="#"><i className="fa fa-pinterest" /></a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li><a href="#">Privacy Policy</a>
                  </li>
                  <li><a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      );
  }
}

export default Footer;