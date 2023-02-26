import { useState } from 'react';
import './styles/App.scss';
import Navbar from "./components/Navbar.js";
import NewestArticles from './components/NewestArticles';
import TrendingArticles from './components/TrendingArticles';
import AddArticle from './components/AddArticle';
import Posts from './pages/Posts';

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
      <NewestArticles />
      <AddArticle />
      <TrendingArticles />
      </div>
    </>
  );
}

export default App;
