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
        <nav class="border fixed split-nav">
          <div class="nav-brand">
            <h3>CHI'S PORTFOLIOS</h3>
          </div>
          <div class="collapsible">
            <input id="collapsible1" type="checkbox" name="collapsible1" />
            <button>
              <label for="collapsible1">
                <div class="bar1" />
                <div class="bar2" />
                <div class="bar3" />
              </label>
            </button>
            <div class="collapsible-body">
              <ul class="inline">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Github</a>
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
