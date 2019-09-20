import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';
import gql from 'graphql-tag';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({ title, id }, i) => {
      return (
        <li className="collection-item" key={i}>
          {title}
          <i onClick={() => this.onSongDelete(id)} className="material-icons">
            delete
          </i>
        </li>
      );
    });
  }
  onSongDelete(id) {
    this.props.mutate({ variables: { id } }).then(() => {
      this.props.data.refetch();
    });
  }
  render() {
    if (this.props.data.loading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/song/create" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
