import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: {
        id
      },
      optimisticResponse: {
        __typeName: 'Mutation',
        likeLyric: {
          id,
          __typeName: 'LyricType',
          likes: likes++
        }
      }
    });
  }

  showList() {
    return this.props.lyrics.map(({ content, likes, id }, i) => {
      return (
        <li key={i} className="collection-item">
          {content}
          <div className="vote-box">
            <i onClick={e => this.onLike(id, likes)} className="material-icons">
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  }
  render() {
    return <ul className="collection">{this.showList()}</ul>;
  }
}
const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
