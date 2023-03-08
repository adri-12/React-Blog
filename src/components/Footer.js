import { Link } from 'react-router-dom';
import '../styles/footer.scss';

const Footer = () => {
const socialList = ["facebook", "instagram", "twitter"];
const renderList = socialList.map((social, index) =>

    <span key={index}>{social}</span>)
    return (
        <div className="footer">
            <div className="container">
            <div>
            <Link to="/" >
                 <img className="logo" src="/logo512.png" alt="React" />
            </Link>
            </div> 
            <div className="social-media">
                {renderList}
            </div>
            </div>
            <span className='copyright'>© 2023 Cosma Marian • Built with ReactJs</span> 
        </div> 
     );
}
 
export default Footer;