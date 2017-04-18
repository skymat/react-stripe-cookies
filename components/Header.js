import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="container">
        <p className="text-center">Monday - Friday <strong>11AM to 2PM</strong>, Saturday - Sunday <strong>9Am to 2PM</strong></p>
        <div className="row">
          <img src={this.props.img} alt="..." />
          { /* Static Header */ }
          <div className="header-text hidden-xs header-text">
            <h1>Great taste</h1><br />
            <p>Eat cake and learn React ;) <br />Nulla hendrerit risus auctor, sodales lacus in, facilisis enim. Curabitur iaculis lacus leo,
              ut consequat tellus posuere vel.</p><br />
          </div>
        </div>	
      
      </header>
      );
  }
}

export default Header;