import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./clickEazzy.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img src={logo} style={{ width: "50px" ,margin:'20px 30px'}} alt="logo"></img>
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/find" className="nav-links" onClick={toggleMenu}>
              Find Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/serviceproviderregistration" className="nav-links" onClick={toggleMenu}>
              Register Your Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dislist" className="nav-links" onClick={toggleMenu}>
              Delist Your Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-links" onClick={toggleMenu}>
              Admin 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
