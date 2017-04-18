import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import ContentMenu from './ContentMenu';
import Footer from './Footer';

class PageMenu extends React.Component {
  render() {
    return (
      <div id="pagemenu">
        <Navigation />
        <Header img={"images/banner2.jpg"}></Header>
        <ContentMenu></ContentMenu>
        { /* FOOTER */ }
        <Footer></Footer>
      </div>
    );
  }
}

export default PageMenu;