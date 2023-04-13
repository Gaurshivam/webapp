import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='navleft'>
        <h1>Shivam Gaur</h1>
      </div>
      <div className='navright'>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/addtocard">Add To Card</Link>
      </div>
    </div>
  );
}

export default Nav;
