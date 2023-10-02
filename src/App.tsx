import React from 'react';
import { Layout } from './components/Layout/index';
import './App.css';
import { Search } from './components/Search/index';
import { Results } from './components/Results/index';
import { Party } from './components/Party/index';

const App = () => {
  return (
    <Layout>
      <Search name='text' type='text' placeholder='Cartoon character name' />
      <Results />
      <Party />
    </Layout>
  );
}

export default App;
