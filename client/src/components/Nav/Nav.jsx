import React from "react";

function Nav() {
  return (
    <div className="sidenav">
      <ul className="nav-list"></ul>
      <li className="nav-list-item"><a href="/">home</a></li>
      <li className="nav-list-item"><a href="/about">about</a></li>
      <li className="nav-list-item"><a href="/contact">contact</a></li>
      <li className="nav-list-item"><a href="/mydropzone">my dropzone</a></li>
    </div>
  );
}

export default Nav;
