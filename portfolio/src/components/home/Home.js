import React, { Component } from "react";
import "./Home.css";
import home_logo from "../../img/chi-developer-logo.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="card">
          <div className="card-header">
            <img className="home_logo" src={home_logo} alt="home logo." />
            <h2 className="home_header">
              Hello, I'm Chi.
              <br />
              I'm a Front-end Developer
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
