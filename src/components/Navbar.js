import { Link } from 'react-router-dom';
import '../styles/navbar.scss';


const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <Link to="/" >
                 <img className="logo" src="/logo512.png" alt="React" />
            </Link>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Article</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;