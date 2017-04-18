import React from 'react';

class ContentBoxText extends React.Component {
  render() {
    return (
      <section className="box-content box-1">
        <div className="container">
          <div className="heading">
            <h2>
              <span className="hr">Welcome!</span>
            </h2>
            <div className="intro">Nulla hendrerit risus auctor, sodales lacus in, facilisis enim. Curabitur iaculis lacus leo,<br /> ut consequat tellus posuere vel.</div>
          </div>
          <div className="row">
            <p>Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin, sagittis sem nibh id elit. Duis sed odio sit.amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
          </div>
        </div>
      </section>
      );
  }
}

export default ContentBoxText;