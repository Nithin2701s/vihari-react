import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container-fluid" style={{ height: "60px" }}>
        <Link className="navbar-brand logo" to="/">
          <span style={{ fontSize: "25px" }}>Vihari</span>
        </Link>
        <form className="d-flex mx-5" role="search">
          <input
            name="tname"
            className="form-control me-2 search"
            style={{ borderRadius: "15px", width: "200px" }}
            type="search"
            placeholder="Search Tours"
            aria-label="Search"
            id="header-search-bar"
          />
          <button
            className="btn1"
            type="submit"
            style={{
              color: "#06bbcc",
              backgroundColor: "transparent",
              height: "30px",
              width: "80px",
              fontSize: "20px",
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div className="links">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/tours" className="nav-item nav-link">
            Tours
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
          <Link to="/profile" className="nav-item nav-link">
            profile
          </Link>
          <div className="icons">
            {localStorage.token == null ? (
              <Link to="/login">
                <i className="fa fa-user" aria-hidden="true" id="login-btn"></i>
              </Link>
            ) : (
              <Link
                to="/"
                onClick={() => {
                  localStorage.removeItem("token");
                }}
              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
