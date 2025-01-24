import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';

function Home({isMenuOpen}) {
  return (
     !isMenuOpen &&  <div className='categories'>
        <Link className='link' to="/people">People</Link>
        <Link className='link' to="/kids">Kids</Link>
        <Link className='link' to="/interior">Interior</Link>
      </div>
    
  )
}

export default Home