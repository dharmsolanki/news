import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <nav className={`navbar navbar-expand-lg navbar-${this.btnValue === "Dark Mode" ? "dark" : "light"} bg-${this.state.btnValue === "Dark Mode" ? "dark" : "light"}`}> */}
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              News-App
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
