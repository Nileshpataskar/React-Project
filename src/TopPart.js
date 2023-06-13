import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './topart.css'


function TopPart() {
  return (
    <div className="topPart">
      <Logo/>
      <div className="navBar">
      <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/category/sports" className="navLink">
          Sports
        </Link>
        <Link to="/category/business" className="navLink">
          Business
        </Link>
        <Link to="/category/entertainment" className="navLink">
          Entertainment
        </Link>
        <Link to="/category/general" className="navLink">
          General
        </Link>
        <Link to="/category/technology" className="navLink">
          Technology
        </Link>
      </div>
      <hr></hr>
    </div>
  );
}

export default TopPart;
