import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  const isLoggedIn = false;
  return ( 
    <div>
      {isLoggedIn ? (
        <nav className="level">
          <div className="level-left">
            <h1 className="level-item title is-4">Welcome, {'name'}!</h1>
          </div>
          <div className="level-right">
            <p className="level-item">
              <Link to='/'>
                <u>home</u>
              </Link>
            </p>
            <p className="level-item" onClick={null}><a className="button is-success">Log Out</a></p>
          </div>
        </nav>
        ): (
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
        )}
    </div>
  );
}


export default Nav;