import React from 'react';
import ContentBoxText from './ContentBoxText';
import ContentBoxTestimonial from './ContentBoxTestimonial';
import ContentBoxInformation from './ContentBoxInformation';
import Footer from './Footer';

class Content extends React.Component {
  render() {
    return (
      <div id="page-content">
        { /* ////////////Content Box 01 */ }
        <ContentBoxText></ContentBoxText>
        { /* ////////////Content Box 3 */ }
        <ContentBoxTestimonial></ContentBoxTestimonial>
        { /* ////////////Content Box 04 */ }
        <ContentBoxInformation></ContentBoxInformation>
        { /* FOOTER */ }
        <Footer></Footer>
        { /* jQuery */ }
      </div>
      );
  }
}

export default Content;