import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        <NavLink to="/">
          <button className="btn btn-outline-success me-3 " type="button">
            Home
          </button>
        </NavLink>
        <NavLink to="/Api">
          <button className="btn btn-outline-success me-3" type="button">
            Api Data
          </button>
        </NavLink>
      </form>
    </nav>
  );
};
export default Navbar;
