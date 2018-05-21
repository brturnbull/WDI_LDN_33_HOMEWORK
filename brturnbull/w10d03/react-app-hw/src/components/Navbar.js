import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';

const Navbar = (props) => {

  function handleLogout() {
    Auth.logout();
    props.history.push('/');
  }

  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className="navbar-burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/bands" className="navbar-item">All the bands</Link>
          <Link to="/bands/new" className="navbar-item">Add a band</Link>
          {Auth.isAuthenticated() && <a onClick={handleLogout}
            className="navbar-item">Logout</a>}
          {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
          {!Auth.isAuthenticated() && <Link to="/login"
            className="navbar-item">Login</Link>}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
