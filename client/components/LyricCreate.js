import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';
import gql from 'graphql-tag';

class LyricCreate extends Component {
  render() {
    return (
      <form>
        <label>Add a lyric</label>
        <input type="text" name="lyric" />
      </form>
    );
  }
}

export default graphql(mutation)(graphql(query)(LyricCreate));
