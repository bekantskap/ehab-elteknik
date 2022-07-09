import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SettingsContext } from '../App';

export default function Navbar() {
  const x = useContext(SettingsContext);

  const changeHandler = () => {
    if (x.darkMode) {
      x.setDarkMode(false);
    } else {
      x.setDarkMode(true);
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
      <button
        className="button-darkmode"
        type="button"
        onClick={() => changeHandler()}
      >
        <i className="fa-solid fa-lightbulb"></i>
      </button>
    </nav>
    // </Router>
  );
}
