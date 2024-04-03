import React from "react";
import "./NavBar.css";


import { Link } from "react-router-dom";
 import logo from '../../src/asset/Layer 1@4x.png'
function NavBar() {
  return (
    <nav className="navbar">
    <img src={logo} alt="" className="nav-logo"/>
       
      <ul className="nav-links">
        <li>   
            <Link to='/' 
            className="nav-links">Home</Link></li>
        <li> <Link to='/about' 
            className="nav-links">About</Link></li>
        <li> <Link to='/skills' 
            className="nav-links">Skills</Link></li>
            <li> <Link to='/projects' 
            className="nav-links">Projects</Link></li>
        <li> <Link to='/contact' 
            className="nav-links">Contact</Link></li>
    
      </ul>

      <div>
      <button><Link to="/contact" className="nav-link">Contact me</Link></button>
      </div>
    </nav>
  );
}
export default NavBar;
