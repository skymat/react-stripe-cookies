import React from 'react'
import Navigation from './Navigation'
import Header from './Header'
import ContentHome from './ContentHome'
import Footer from './Footer'

class PageIndex extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Header img={"images/banner3.jpg"} />
        <ContentHome />
        <Footer />
      </div>
    );
  }
}

export default PageIndex;