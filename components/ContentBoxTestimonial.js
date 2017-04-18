import React from 'react';

class ContentBoxTestimonial extends React.Component {
  render() {
    return (
      <section className="box-content box-3 box-style-3">
        <div className="container">
          <div className="heading">
            <h2>
              <span className="hr client-say">Clients Say</span>
            </h2>
          </div>
          <div className="row">
            <div className="item text-center">
              <img src="images/partner1.png" className="img-circle" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
              <span>Catherine Grace - America</span>
            </div>
          </div>
        </div>
      </section>
      );
  }
}

export default ContentBoxTestimonial;