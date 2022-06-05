import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="sidenav">
      <ul className="nav-list"></ul>
      <li className="nav-list-item"><a href="/">home</a></li>
      <li className="nav-list-item"><a href="/about">about</a></li>
      <li className="nav-list-item"><a href="/contact">contact</a></li>
    </div>
  );
}

export default Nav;
