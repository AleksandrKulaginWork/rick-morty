import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import { Layout } from './components/Layout/index';
import { CharacterInfoPage } from "./pages/CharacterInfoPage";
import { CharacterSearchPage } from './pages/CharacterSearchPage';
import { Provider } from "react-redux";
import { store } from './store/store'


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<CharacterSearchPage />} />
            <Route path='/character-info' element={<CharacterInfoPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
