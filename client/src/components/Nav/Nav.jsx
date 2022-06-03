import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="sidenav">
      <ul>NAVBAR</ul>
      <Link to="/">
      <li>home</li>
      </Link>
      <li><a href="/about">about</a></li>
      <li><a href="/contact">contact</a></li>
    </div>
  );
}

export default Nav;
