import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.scss';
import '../styles/mobile-responsive.scss'


const Navbar = () => {
const [isActive, setIsActive] = useState(false);
const handleClick = () => {
setIsActive(current => !current);};

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
            <div className={isActive ? 'burger' : ''} onClick={handleClick}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
     );
}
 
export default Navbar;