import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import { Layout } from './components/Layout/index';
import { CharacterInfoPage } from "./pages/CharacterInfoPage";
import { CharacterSearchPage } from './pages/CharacterSearchPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
          <Route path='/' element={<CharacterSearchPage />} />
          <Route path='/character-info' element={<CharacterInfoPage />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
