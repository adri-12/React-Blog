import { Link } from 'react-router-dom';
import '../styles/footer.scss';

const Footer = () => {

const socialList = [
    { href: '#',
        svg:"./public/assets/instagram.svg"
    },
    { href: '#',
        svg:"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448' fill='%23222326'%3E%3Cpath d='M448 0v448H0V0h448zM299.75 64c-22.333 0-41.375 7.875-57.125 23.625S219 122.417 219 144.75c0 6 .667 12.167 2 18.5-33-1.667-63.958-9.958-92.875-24.875S74.667 103.583 54.5 78.75c-7.333 12.5-11 26.083-11 40.75 0 13.833 3.25 26.667 9.75 38.5 6.5 11.833 15.25 21.417 26.25 28.75-12.717-.49-24.637-3.77-35.76-9.841L43 176.5v1c0 19.5 6.125 36.625 18.375 51.375s27.708 24.042 46.375 27.875a83.54 83.54 0 01-21.25 2.75c-4.667 0-9.75-.417-15.25-1.25 5.167 16.167 14.667 29.458 28.5 39.875 13.833 10.417 29.5 15.792 47 16.125-29.333 23-62.75 34.5-100.25 34.5-7.167 0-13.667-.333-19.5-1C64.5 371.917 105.833 384 151 384c28.667 0 55.583-4.542 80.75-13.625s46.667-21.25 64.5-36.5 33.208-32.792 46.125-52.625c12.917-19.833 22.542-40.542 28.875-62.125 6.333-21.583 9.5-43.208 9.5-64.875 0-4.667-.083-8.167-.25-10.5 15.833-11.5 29.333-25.417 40.5-41.75-15.5 6.667-31 10.833-46.5 12.5C392 104 403.833 89.167 410 70c-16 9.5-33.083 16-51.25 19.5-16-17-35.667-25.5-59-25.5z'/%3E%3C/svg%3E"},
    { href: '#',
        svg: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448' fill='%23222326'%3E%3Cpath d='M448 0v448H0V0h448zM276.877 16h-1.127c-28.833 0-51.917 8.542-69.25 25.625-17.16 16.912-25.826 40.645-25.997 71.197l-.003.928v54.5h-63.75v74h63.75V432H257V242.25h63.5l9.75-74H257V121c0-12 2.5-21 7.5-27 4.923-5.908 14.37-8.907 28.342-8.998L293.5 85h39.25V19c-13.085-1.938-31.336-2.938-54.754-2.997l-1.12-.003z'/%3E%3C/svg%3E"}
];

const socialLinks = socialList.map((social,index) => {
    return (
        <a key={index} href={social.href}>
            <span style={{ background: `no-repeat url(${social.svg ? social.svg : 'none'})`}}></span>
        </a>
    );
});

    return (
        <div className="footer">
            <div className="container">
            <div>
            <Link to="/" >
                 <img className="logo" src="/logo512.png" alt="React" />
            </Link>
            </div> 
            <div className="social-media">
                {socialLinks}
            </div>
            </div>
            <span className='copyright'>© 2023 Cosma Marian • Built with ReactJs</span> 
        </div> 
     );
}
 
export default Footer;