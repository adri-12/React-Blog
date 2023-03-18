import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.scss';

const Navbar = ({ toggleNavbar, setToggleNavbar }) => {
    return ( 
        <nav className='navbar'>
            <div className='logo-container'>
            <Link to="/" >
                 <img className="logo" src="/logo512.png" alt="React" />
            </Link>
            </div>
            <ul className={`nav-links ${toggleNavbar ? 'nav-active' : ''}`}>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/create">New Article</Link></li>
            </ul>
            <div className='burger' onClick={() => setToggleNavbar(!toggleNavbar)}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
     );
}
 
export default Navbar;