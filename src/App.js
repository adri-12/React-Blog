import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';
import RecentArticles from './Components/RecentArticles';
import Footer from './Components/Footer';

function App() {  
  const [toggleNavbar,setToggleNavbar] = useState(false);
  return (
    <Router>
      <Navbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar}/>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/blogs/:id" element={<RecentArticles />}/>
        </Routes>
      </>
      <Footer />
      </Router>
    
  );
}

export default App;
