import { Link } from "react-router-dom";
import "../styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <Link to="/">
            <img className="logo" src="/logo512.png" alt="React" />
          </Link>
        </div>
        <ul className="social-media">
          <li>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </li>
        </ul>
      </div>
      <span className="copyright">
        © 2023 Cosma Marian • Built with ReactJs
      </span>
    </div>
  );
};

export default Footer;
