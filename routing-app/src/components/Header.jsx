import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">Header</div>
      </div>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/features">
          Features
        </Link>
        <Link className="nav-link" to="/aboutus">
          AboutUs
        </Link>
      </div>
    </nav>
  );
};

export default Header;
