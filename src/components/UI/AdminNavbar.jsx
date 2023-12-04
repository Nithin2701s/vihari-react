import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar" style={{ backgroundColor: '#222271',fontSize:'20px',padding:'10px' }}>
      <Link className="navbar-brand" to="/">
        <i className="fa fa-bus" aria-hidden="true"></i>
      </Link>
      <Link className="navbar-brand" to="/admindb">
        Vihari
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/admindb/allbuses">
              All Buses
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admindb/allusers">
              All Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admindb/alltours">
              All Tours
            </Link>
          </li>
          {/* Add more navbar items here */}
        </ul>
        <form id="frmLogout" action="/admin"></form>
        <ul className="navbar-nav ml-auto" style={{marginLeft:'150px'}}>
          <li className="nav-item">
            <span className="nav-link">
              Welcome, <b>Admin</b>!
            </span>
          </li>
          <li className="nav-item" style={{marginLeft:'370px'}}>
            <Link className="nav-link" to="/">
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
