import React from 'react';
import './Navbar.scss'
import dp from './dp.svg'
import button from './button.svg'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/#">LOGO HERE</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav">
          <img src={dp} alt='dp'></img>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Anthony Johnson
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/#">Action</a>
              <a class="dropdown-item" href="/#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}