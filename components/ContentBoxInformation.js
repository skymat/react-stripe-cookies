import React from 'react';

class ContentBoxInformation extends React.Component {
  render() {
    return (
      <section className="box-content box-4 box-style-1" id="services">
        <div className="container">
          <div className="heading">
            <h2>
              <span className="hr">Information</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="service">
                <a href="single.html"><img src="images/icon1.png" title="icon-name" /></a>
                <h3>Sucess Story</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <a href="contact.html"><img src="images/icon3.png" title="icon-name" /></a>
                <h3>Map</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <a href="menu.html"><img src="images/icon2.png" title="icon-name" /></a>
                <h3>Food Menu</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>	
          </div>
        </div>
      </section>
      );
  }
}

export default ContentBoxInformation;