import React from 'react'
import '../CSS/Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
   const navigate =useNavigate()
    return (
      <nav className="navbar  bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/"><span>V</span>ihari</Link>
        <form className="d-flex mx-5" role="search">
        <input name="tname" className="form-control me-2 search" type="search" placeholder="Search Tours" aria-label="Search"
        id="header-search-bar" />
      <button className="btn1" type="submit" style={{color: '#06bbcc',backgroundColor: 'transparent'}}>
        <i className="fa fa-search"></i>
      </button>
          </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <i className="fas fa-hamburger" style={{color: '#bbbbbb'}}></i>
    </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">VIHARI</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end  flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Link</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Destination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Tours</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Review</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact</Link>
            </li>
            <li className="nav-item">
              {!localStorage.token?<Link className="nav-link" to="/login"><i className="fa fa-user mx-2" aria-hidden="true" id="login-btn"></i>Login</Link>:<Link className="nav-link" to="/" onClick={()=>{localStorage.removeItem('token'); navigate('/')}}><i className="fa fa-sign-out mx-2" aria-hidden="true" id="login-btn" ></i>Logout</Link>}
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
    )
}

export default Navbar