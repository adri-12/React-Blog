import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import { useState } from 'react';

const Navbar = () => {

    return ( 
        <nav className='navbar'>
            <div className='logo-container'>
            <Link to="/" >
                 <img className="logo" src="/logo512.png" alt="React" />
            </Link>
            </div>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Article</Link>
            </div>
            <div className='burger'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
     );
}
 
export default Navbar;