import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((song, i) => {
      return (
        <li className="collection-item" key={i}>
          {song.title}
        </li>
      );
    });
  }
  render() {
    if (this.props.data.loading) {
      return <p>Loading...</p>;
    }
    return <ul className="collection">{this.renderSongs()}</ul>;
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
