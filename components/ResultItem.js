import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class ResultItem extends React.Component {
  render() {
    return (
      <div className="item-container">
        <Link to="/panier">
          <div className="item-caption">
            <div className="item-caption-inner">
              <div className="item-caption-inner1">
                <h3>$45</h3>
                <span>Only</span>
              </div>
            </div>
          </div>
          <img src="images/menu-9.jpg" />
        </Link>
      </div>
      );
  }
}

export default ResultItem;