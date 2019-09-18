import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { mutations } from 'apollo-client/mutations/store';

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    });
  }
  render() {
    return (
      <div>
        <h3>Add song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="">Song title: </label>
          <input
            type="text"
            value={this.state.title}
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(AddSong);
