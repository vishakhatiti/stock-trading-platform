import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Style.css";

function Navbar() {
  return (
    
     <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm py-3 sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" href="/">
          <img
            src="media/images/logo.svg" 
            alt="Logo"
            style={{ width: "25%" }}
          />
        </Link>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-lg-4">
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to="/signup">
                Signup
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to="/products">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to="/pricing">
                Pricing
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to="/support">
                Support
              </NavLink>
            </li>

            {/* Menu icon  */}
            <li className="nav-item">
              <NavLink to="/menu">
                 <i className="fa fa-bars fa-1x" style={{color: "gray", paddingTop: "12px", paddingLeft:"2px", cursor: "pointer"}}></i>
            </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
