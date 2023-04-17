import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <nav>
        <div className='nav-container'>
            <h2>Appex</h2>
        </div>
        <div className='nav-elements'>
            <a href='#'>Home</a>
            <a href='#'>About us</a>
            <a href='#'>contact us</a>
        </div>
    </nav>
  )
}

export default Navbar