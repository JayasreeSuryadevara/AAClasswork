import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import createClient from './graphql/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import gql from 'graphql-tag';

createClient().then(client => {

  if (process.env.NODE_ENV === 'development') {
    window.client = client;
    window.gql = gql;
  }

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
  );
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
