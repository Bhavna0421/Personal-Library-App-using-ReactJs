import React from "react";
import {Link} from "react-router-dom";
import "../layout/Navbar.css";
const Navbar = () => {
  return (
     <div className="sum">
      <div className="logo">
             My Library 
      </div>
      
  <nav className="items">
        <ul className="ul">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/List'>Add book here</Link>
          </li>
        </ul>
      </nav>
      </div>
      );
};

export default Navbar;