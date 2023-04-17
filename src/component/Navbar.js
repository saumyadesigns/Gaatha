import React, { useEffect, useState } from 'react';
import {Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {
    
  const location = useLocation();

  let navClass = 'home-navbar';

  if (location.pathname === "/") {
    navClass = 'home-navbar';
  } else if (location.pathname === '/Tales') {
    navClass = 'tales-navbar';
  } else if (location.pathname === '/Shop') {
    navClass = 'shop-navbar';
  } 
  else if (location.pathname === '/Community') {
    navClass = 'community-navbar';
  } 
  
  return (
    
    <header className={navClass}>
      <div id="header_logo">
        <img src="../assets/navbar/logo.png"></img>
      </div>
      <div id="nav">
        <nav>
          <ul>
            <li><a><Link to="/"> Home </Link></a></li>
            <li><a href="Tales"><Link to="Tales"> Tales </Link></a></li>
            <li><a href="Shop"><Link to="Shop"> Shop </Link></a></li>
            <li><a href="About"><Link to="About"> About </Link></a></li>
            <li><a href="Community"><Link to="Community"> Community </Link></a></li> 

            {/*<div className='links'>
                <Link to ="/"> Home </Link>
                <Link to ="About"> About </Link>
                <Link to ="Tales"> Tales </Link>
                <Link to ="Shop"> Shop </Link>
               <Link to ="Community"> Community </Link>*/}

          </ul>
        </nav>
      </div>
      <div id="search_bar">
        <form class="search-form">
          <input type="text" placeholder="Search..." class="search-input"/>
            <button type="submit" class="search-button">
              <img src="../assets/Navbar/search.png"/>
            </button>
        </form>

      </div>

    </header>
    
  )
}

export default Navbar;