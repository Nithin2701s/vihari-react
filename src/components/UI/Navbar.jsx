import React from 'react'
import '../CSS/Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="/"><span>V</span>ihari</a>
        <form className="d-flex mx-5" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button> */}
        <input name="tname" class="form-control me-2 search" type="search" placeholder="Search Tours" aria-label="Search"
        id="header-search-bar" />
      <button class="btn1" type="submit" style={{color: '#06bbcc',backgroundColor: 'transparent'}}>
        <i class="fa fa-search"></i>
      </button>
          </form>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-hamburger" style={{color: '#bbbbbb'}}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Destination</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Tours</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Review</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">{!localStorage.token?<><i class="fa fa-user mx-2" aria-hidden="true" id="login-btn"></i>Login</>:<><i class="fa fa-sign-out mx-2" aria-hidden="true" id="login-btn"></i>Logout</>}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar