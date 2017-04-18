import React from 'react';
import ResultColumn from './ResultColumn';

class Article extends React.Component {
  render() {
    return (
      <article>
        <div className="heading">
          <h2>
            <span className="hr">Donuts</span>
          </h2>
        </div>
        <div className="row">
          <ResultColumn></ResultColumn>
          <ResultColumn></ResultColumn>
          <ResultColumn></ResultColumn>
          <ResultColumn></ResultColumn>
        </div>
      </article>
      );
  }
}

export default Article;