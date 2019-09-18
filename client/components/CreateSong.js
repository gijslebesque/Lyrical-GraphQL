import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }
  render() {
    return (
      <div>
        <h3>Add song</h3>
        <form>
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

// const mutation = gql`
// {

// }
// `;

export default AddSong;
