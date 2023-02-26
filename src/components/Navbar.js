import Posts from "../pages/Posts";
import { Link, Routes, Route } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
            <Link to="/" >
                <img className="logo" src="logo512.png" alt="React" />
                </Link>
                 <h3 className="h3-nav">React Blog</h3>
            <ul>
                <li>
                    <Link to="/Posts" className="nav-links">Articles</Link>
                </li>
            </ul>
            </nav>
            
            <Routes>
            <Route path="/Posts/*" element={<Posts />} />
            </Routes>
        </div>
            

    );
};

export default Navbar;