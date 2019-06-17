import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Portfolios from "../portfolios/portfolios";
import Articles from "../articles/articles";
import Home from "../home/Home";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
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
                    <Link to="/">Capabilities</Link>
                  </li>
                  <li>
                    <Link to="/works">Works</Link>
                  </li>
                  <li>
                    <Link to="articles">What's New</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/works/" component={Portfolios} />
        <Route path="/articles/" component={Articles} />
      </Router>
    );
  }
}

export default Navbar;
