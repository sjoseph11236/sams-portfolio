import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  const isLoggedIn = false;
  return ( 
    <div>
        <nav className="level">
        <div className="level-left">
        </div>
        <div className="level-right">
          <p className="level-item">
            <Link to='/'>
              <u>Home</u>
            </Link>
          </p>
          <p className="level-item">
            <Link to='/signin'>
              <u>Sign In</u>
            </Link>
          </p>
        </div>
      </nav>
  </div>
  );
}


export default Nav;