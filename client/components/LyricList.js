import React, { Component } from 'react';

class LyricList extends Component {
  showList() {
    return this.props.lyrics.map(({ content }, i) => {
      return (
        <li key={i} className="collection-item">
          {content}
        </li>
      );
    });
  }
  render() {
    return <ul className="collection">{this.showList()}</ul>;
  }
}

export default LyricList;
