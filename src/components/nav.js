import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img
          src="/images/iterationincv3.png"
          alt="Snake logo"
          className="snake"
        />
        <h1>Smart <bold> Care </bold> </h1>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About us</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign up</Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
