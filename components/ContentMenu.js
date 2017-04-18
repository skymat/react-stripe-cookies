import React from 'react';
import Article from './Article';

class ContentMenu extends React.Component {
  render() {
    return (
      <div id="page-content">
        <div id="main-content">
          <div className="container">
            <Article></Article>
            <hr />
            <Article></Article>
          </div>
        </div>
      </div>
      );
  }
}

export default ContentMenu;