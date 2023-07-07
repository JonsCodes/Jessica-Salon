import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/gallery" activeClassName="active">
        Gallery
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/services" activeClassName="active">
        Services
      </NavLink>
      <NavLink to="/online-sales" activeClassName="active">
        Online Sales
      </NavLink>
    </nav>
  );
};

export default Navbar;
