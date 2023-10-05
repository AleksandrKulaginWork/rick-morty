import React from 'react';
import { Layout } from './components/Layout/index';
import './App.css';
import { Search } from './components/Search/index';
// import { ListOfCharacters } from './components/ListOfCharacters/index';
// import { Party } from './components/Party/index';

const App = () => {
  return (
    <Layout>
      <Search name='text' type='text' />
    </Layout>
  );
}

export default App;
