import React from 'react'
import './navbar.css'

const Navbar = () => {
  return(
    <div className="menu-container">
      <div className="menu-title">Redux Calculator</div>
      <div className="menu-item-list-container">
        <div className="menu-item-list"></div>
        <div className="menu-item"></div>
      </div>
    </div>
  )
}

export default Navbar