import React from 'react'
import '../CSS/Navbar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div class="navbar-header">
      <Link className="navbar-brand logo" to="/"><span>V</span>ihari</Link>
      <nav className="navbar navbar-expand-lg sticky-top p-0 burge">
        <form className="d-flex mx-5 searchtext" role="search">
          <input name="tname" className="form-control me-2 search" type="search" placeholder="Search Tours" aria-label="Search" id="header-search-bar" />
          <button className="btn1" type="submit" style={{ color: '#06bbcc', backgroundColor: 'transparent' }}>
            <i className="fa fa-search"></i>
          </button>
        </form>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-hamburger" style={{ color: '#bbbbbb' }}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Destination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Tours">Tours</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Reviews">Review</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact</Link>
            </li>
            <li className="nav-item icon">
              {!localStorage.getItem('token')? <Link className="nav-link" to="/login"><i className="fa fa-user mx-2" aria-hidden="true" id="login-btn"></i></Link>:<Link className="nav-link" to="/" onClick={()=>{localStorage.removeItem('token');navigate('/')}}><i className="fa fa-sign-out mx-2" aria-hidden="true" id="login-btn"></i>Logout</Link>} 
              {/* <Link className="nav-link" to="/login">{!localStorage.token ? <><i className="fa fa-user mx-2" aria-hidden="true" id="login-btn"></i></> : <><i className="fa fa-sign-out mx-2" aria-hidden="true" id="login-btn"></i>Logout</>}</Link> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar