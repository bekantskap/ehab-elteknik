import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const changeHandler = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    // <Router>
    <nav className="nav-navbar">
      <Link to="/">
        <img
          src={'../img/ehabLogga.png'}
          alt="ehab logo"
          className="nav-navbar__logo"
        ></img>
      </Link>
      <ul className="nav-navbar__links">
        <li className="nav-navbar__link">
          <Link className="link" to="/">
            <h4>HEM</h4>
          </Link>
        </li>
        <li className="nav-navbar__link">
          <Link className="link" to="/services">
            <h4>TJÄNSTER</h4>
          </Link>
        </li>
        <li className="nav-navbar__link">
          <Link className="link" to="/contact">
            <h4>KONTAKT</h4>
          </Link>
        </li>
      </ul>
      <button type="button" onClick={() => changeHandler()}>
        <i
          className={`fa-solid fa-lightbulb ${darkMode ? 'dark' : 'light'}`}
        ></i>
      </button>
    </nav>
    // </Router>
  );
}
