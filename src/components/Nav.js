import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nav-cont">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
