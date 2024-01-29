import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className ="main">
      <div className="logo">
          <h2>ankit rajavat</h2>
      </div>
      <div className="links">
      <ul>
                <li><a href="#about-loc" class="active">About</a></li>
                <li><a href="#skill-loc">Skills</a></li>
                <li><a href="#portfolio-loc">Portfolio</a></li>
                <li><a href="#contact-loc">Contact</a></li>
                
            </ul>
      </div>
      <div className="searchBar">
      <input type="text" placeholder="search" />
      </div>

    </div>
  )
}

export default Header
