import './styles/App.scss';
import Navbar from "./components/Navbar.js";
import NewestArticles from './components/NewestArticles';
import TrendingArticles from './components/TrendingArticles';
import AddPost from './components/Addpost';

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
      <NewestArticles />
      <AddPost />
      <TrendingArticles />
      </div>
      </>
  );
}

export default App;
