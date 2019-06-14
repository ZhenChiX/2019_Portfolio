import React, { Component } from "react";
import "./Portfolios.css"

class Portfolios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="card col-12" 
        style={{ width: "40rem" ,margin:"auto"}}
        >
          <div className="card-header">Header</div>
          <img src="https://picsum.photos/768" alt="Card example image" />

          <div className="card-body">
            <h4 className="card-title">My awesome Paper card!</h4>
            <h5 className="card-subtitle">Nice looking subtitle.</h5>
            <p className="card-text">
              Notice that the card width in this example have been set to 20rem,
              otherwise it will try to fill the current container/row where the
              card is.
            </p>
            <button>Let me go here!</button>
          </div>
        </div>

        {/* <Arwes
          background="/static/img/background.jpg"
          pattern="/static/img/glow.png"
        >
          <Frame
            show={this.state.show}
            animate={true}
            level={3}
            corners={4}
            layer="primary"
          >
            <h2 style={{ padding: "20px 40px", fontSize: "32px" }}>
              show this message
            </h2>
          </Frame>
          <div style={{ padding: 40 }}>
            <Project
              animate
              header="PROJECT, OFFICIA DESERUNT ANIM ID EST LABORUM"
            >
              {anim => (
                <p>
                  <Words animate show={anim.entered}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis laboris nisi ut
                    aliquip ex. Duis aute irure. Consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </Words>
                </p>
              )}
            </Project>
          </div>
        </Arwes> */}
      </div>
    );
  }
}

export default Portfolios;
