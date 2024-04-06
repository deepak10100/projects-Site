import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      
    {/* <span className="navbar-toggler-icon"></span> */}
     
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home 
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/binary_to_decimal">
              Binary To Decimal 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">
              Calculator
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;