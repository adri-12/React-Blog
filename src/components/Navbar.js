import React from "react";
import Home from "../pages/Home";
import Addpost from "../pages/Addpost";
import Posts from "../pages/Posts";
import { Link, Routes, Route } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
            <Link to="/Home" >
                <img className="logo" src="logo512.png" alt="React" />
                </Link>
                 <h3 className="h3-nav">React Blog</h3>
            <ul>
                <li>
                    <Link to="/Posts" className="nav-links">Articles</Link>
                </li>
                <li>
                    <Link to="/Addpost" className="nav-links">Write an article</Link>
                </li>
            </ul>
            </nav>
            
            <Routes>
            <Route path="/Home/*" element={<Home />} />
            <Route path="/Posts/*" element={<Posts />} />
            <Route path="/Addpost/*" element={<Addpost />} />
            </Routes>
        </div>
            

    );
};

export default Navbar;