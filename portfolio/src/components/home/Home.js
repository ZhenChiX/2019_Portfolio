import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="card sm-12 col">
          <div className="card-header">
            <h2>Website Under Construction</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
