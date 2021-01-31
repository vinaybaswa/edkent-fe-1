import React from 'react';
import './Navbar.scss'
import dp from './dp.svg'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/#">LOGO HERE</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        </ul>
        <ul className="navbar-nav">
          <img src={dp} alt='dp'></img>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Anthony Johnson
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/#">Action</a>
              <a className="dropdown-item" href="/#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
