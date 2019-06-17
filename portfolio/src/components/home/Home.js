import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className>
        <div className="card sm-12 col">
          <div className="card-header">
            <h2>Home</h2>
          </div>
          <div className="card-body">
            <h4 className="card-title">Home title</h4>
            <h5 className="card-subtitle">subtitle for home</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              qui mollitia voluptatibus aut aspernatur quidem repudiandae,
              voluptate sint itaque explicabo?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
