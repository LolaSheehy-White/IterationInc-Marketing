import { Link } from "react-router-dom";


const Footer = () => {
    return (
    <nav className="footer">
        <div className="footer-header">
        <img
            src="/images/iterationincv3.png"
            alt="Snake logo"
            className="snake"
        />
        <h1>Smart <bold> Care </bold> </h1>
        </div>
        <div className="footer-main">
        <ul className="footer-links">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Aboutus">About us</Link>
            </li>
            <li>
            <Link to="/help">Help</Link>
            </li>
            <li>
            <Link to="/SignUp">Sign up</Link> 
            </li>
            <li>
            <Link to="/reviews">Reviews</Link>
            </li>
            <li>
            <Link to="/reviews#contactUs"> Contact us </Link>
            </li>
        </ul>
        </div>
    </nav>
    );
};

export default Footer;