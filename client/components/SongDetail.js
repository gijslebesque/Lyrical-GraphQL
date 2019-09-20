import React, { Component } from 'react';
import query from '../queries/querySong';
import { Link } from 'react-router-dom';
import LyricCreate from './LyricCreate';

import { graphql } from 'react-apollo';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) {
      return <div>Loading... </div>;
    }
    return (
      <div className="songDetail">
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate />
      </div>
    );
  }
}

export default graphql(query, {
  options: props => {
    return {
      variables: {
        id: props.match.params.id
      }
    };
  }
})(SongDetail);
