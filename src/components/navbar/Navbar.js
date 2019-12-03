import React from 'react'
import './navbar.css'
import MemoryList from '../memory/memoryList'





const Navbar = ({results, setResults, display, setDisplay}) => {
  
  function displayMenu() {
    let memorySection = document.getElementById('js-menu');
    memorySection.classList.toggle('active');
  }
  
  return(
    <>
    <div className="menu-container">
      <div className="menu-title">Redux Calculator</div>
      <div className="menu-item-list-container">
        <div className="menu-item-list"></div>
        <div className="menu-item navbar-toggle" onClick={() => displayMenu()}>Memory</div>
      </div>
    </div>
    <div className="memory-section" id="js-menu">
      <MemoryList results={results} setResults={setResults} display={display} setDisplay={setDisplay} />
    </div>
    </>
  )
}

export default Navbar