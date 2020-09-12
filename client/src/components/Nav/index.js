import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        to={process.env.PUBLIC_URL + '/'}
        className="navbar-brand"
        >
        Google Books Search
      </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to={process.env.PUBLIC_URL + '/'}
            className="nav-link"
            >
            Search
          </Link>
        </li>
        <li className="nav-item">
         <Link
            to={process.env.PUBLIC_URL + '/saved'}
            className="nav-link"
            >
            Saved
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;
