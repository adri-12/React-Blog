import './styles/App.scss';
import Navbar from "./components/Navbar.js";
import NewestArticles from './components/NewestArticles';
import TrendingArticles from './components/TrendingArticles';

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
      <NewestArticles />
      <div className='middle-section'>
        <h1>Get The Knowledge You Need</h1>
        <h2>Click Bellow To Get Started.</h2>
        <button>YOUR JOURNEY STARTS HERE</button>
      </div>
      <TrendingArticles />
      </div>
      </>
  );
}

export default App;
