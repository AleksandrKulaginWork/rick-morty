import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})


const element = document.getElementById('root');
if (!element) throw new Error('Error');

const root = ReactDOM.createRoot(element);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


