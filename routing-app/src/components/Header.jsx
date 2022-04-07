import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          Header
        </div>
        <div className="text-secondary">
          You are now at{' '}
          <span className="text-danger">"{location.pathname}"</span>
        </div>
        <button className="btn btn-dark" onClick={() => navigate(-1)}>
          Go Back
        </button>
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
