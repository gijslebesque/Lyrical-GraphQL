import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import { Route, HashRouter } from 'react-router-dom';
import CreateSong from './components/CreateSong';
import SongDetail from './components/SongDetail';
import './style/style.css';

//client is the Apollo store
const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div className="container">
          <Route exact path="/" component={SongList} />
          <Route exact path="/song/create" component={CreateSong} />
          <Route exact path="/song/:id" component={SongDetail} />
        </div>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
