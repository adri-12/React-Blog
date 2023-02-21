import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";



const Navbar = () => {


    return (
            <nav>
            <Router>
            <Link to="/" >
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
            </Router>
            </nav>

    );
};

export default Navbar;