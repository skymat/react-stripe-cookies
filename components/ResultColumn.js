import React from 'react';
import ResultItem from './ResultItem';

class ResultColumn extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
      </div>
      );
  }
}

export default ResultColumn;