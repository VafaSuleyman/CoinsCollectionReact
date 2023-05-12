import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header_panel'>
      <h2 className='list'>List of the coins</h2>
      <h6 className='home'><Link to ={"/"}>Homepage</Link> — List of the coins</h6>
    </div>
  )
}

export default Header