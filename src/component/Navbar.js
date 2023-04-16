import React, { useEffect, useState } from 'react';
import {Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import bgnavbarimg from "../assets/navbar/navbarbg.png"


function Navbar() {
    

  return (
    
    <div className="navbar" >
    <div className="bgnav">
        <img src={bgnavbarimg}>
        </img>
    </div>
    
    
            <div className='links'>
                <Link to ="/"> Home </Link>
                <Link to ="About"> About </Link>
                <Link to ="Tales"> Tales </Link>
                <Link to ="Shop"> Shop </Link>
                <Link to ="Community"> Community </Link>
            
            </div>
        
        </div>

    
  )
}

export default Navbar;