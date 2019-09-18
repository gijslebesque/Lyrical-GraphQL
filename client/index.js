import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import { Route, HashRouter } from 'react-router-dom';
import CreateSong from './components/CreateSong';
//client is the Apollo store
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div className="container">
          <Route exact path="/" component={SongList} />
          <Route exact path="/song/create" component={CreateSong} />
        </div>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
