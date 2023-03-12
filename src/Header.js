import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className='container-fluid mt-3'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
    <div className="container-fluid">
      <a className="navbar-brand" href="javascript(void)">Money Manager Application</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  aria-expanded="false">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product</a>
          </li>
         <li className="nav-item">
            <a className="nav-link" href="#">Policy</a>
          </li>
          </ul> */}
          {/* <button className='btn btn'>Sign in</button> */}
        </div>
    </div>
  </nav>
  </div>
  )
}

export default Header