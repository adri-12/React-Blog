import React from "react";
import Home from "../pages/Home";
import Addpost from "./Addpost";
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
            </ul>
            </nav>
            
            <Routes>
            <Route path="/Home/*" element={<Home />} />
            <Route path="/Posts/*" element={<Posts />} />
            </Routes>
        </div>
            

    );
};

export default Navbar;