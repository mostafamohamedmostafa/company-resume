import React from "react";

import { Link, Route, Routes } from "react-router-dom";

export const Navigation = () => {
  return (
    <section className="Navigation mb-0 ">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="company-resume">
                Home
              </Link>

              <Link className="nav-link" to="AboutPage">
                About Page
              </Link>

              <Link className="nav-link" to="TeamPage">
              TeamPage
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};
