import React from 'react';
import "../styles/Footer.css";
import logo from "../assets/footer/gaathalogo.png"
import line from "../assets/footer/Line 7.png"

import SocialIcons from "../component/SocialICons.js"

function Footer() {


  return (
    <div className='footer'>
        <div className='logo'>
            <img src={logo}></img>
        </div>
        <div className='line'>
            <img src={line}></img>
        </div>

        <div className='gaathahq'>
            <h1>
                Gaatha Headquarters
            </h1>
            <p>
                ABC Street, XYZ city, <br></br>
                landmark, street 890, <br></br>
                State, Country        
            </p>
            
            
        </div>
        <div className='Contact'>
        <h1>
                Contact Us
            </h1>
            <p>
            +919999900000<br></br>
            gaatha@gmail.com<br></br>
            P.O box 6709
            </p>
        </div>
        <div className='find'>
            <h1> 
                Find Us Here
            </h1>
       
        <div className="socialIcons" >
            <a className="icon1"  href="https://www.linkedin.com/in/navnoor-singh-7627a1240/">
                <i className="fa-brands fa-twitter" aria-hidden="true" title="Navnoor Singh' LinkedIn Profile"></i>
            </a>
            <a className="icon2" href="https://www.instagram.com/nav._.noor/">
                <i className="fa-brands fa-instagram" aria-hidden="true" title="Navnoor Singh' Instagram Profile"></i>
            </a>
            <a className="icon3"  href="https://www.youtube.com/@aabajaba3199">
                <i className="fa-brands fa-facebook" aria-hidden="true" title="Navnoor Singh' Youtube Profile"></i>
            </a>
    </div>
    </div>
        
    </div>
  )
}

export default Footer;