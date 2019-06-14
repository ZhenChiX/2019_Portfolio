import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>show this message</p>
        <nav className="border fixed split-nav">
          <div className="nav-brand">
            <h3>CHI'S PORTFOLIOS</h3>
          </div>
          <div className="collapsible">
            <input id="collapsible1" type="checkbox" name="collapsible1" />
            <button>
              <label for="collapsible1">
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
              </label>
            </button>
            <div className="collapsible-body">
              <ul className="inline">
                <li>
                  <a href="#">Capabilities</a>
                </li>
                <li>
                  <a href="#">Works</a>
                </li>
                <li>
                  <a href="#">What's New</a>
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
