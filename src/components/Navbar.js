import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link" to="/about">
                About us
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="form-check form-switch text-light">
          <input
            className="form-check-input"
            type="checkbox"
            //   role="switch"
            onClick={props.myfunc}
            id="flexSwitchCheckDefault"
          />
          <label
            className={`form-check-label text-${props.modebtn}`}
            htmlFor="flexSwitchCheckDefault"
          >
            {"enable " + props.modebtn + " mode"}
          </label>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "lol",
  aboutText: "about me ",
};
