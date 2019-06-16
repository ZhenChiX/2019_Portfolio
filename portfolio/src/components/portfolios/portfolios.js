import React, { Component } from "react";
import "./Portfolios.css";

class Portfolios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "85vw", margin: "3em auto" }}>
        <div className="row flex-center">
          <div
            className="card sm-12 md-7 col"
            style={{ width: "40rem", margin: "3em auto" }}
          >
            <div className="card-header">Works</div>
            <img src="https://picsum.photos/500" alt="Card example image" />

            <div className="card-body">
              <h4 className="card-title">My awesome Paper card!</h4>
              <h5 className="card-subtitle">Nice looking subtitle.</h5>
              <p className="card-text">
                Notice that the card width in this example have been set to
                20rem, otherwise it will try to fill the current container/row
                where the card is.
              </p>
              <wired-card elevation="4">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus qui mollitia voluptatibus aut aspernatur quidem
                  repudiandae, voluptate sint itaque explicabo?
                </p>
              </wired-card>
              <hr />
              <button>Visit the site</button>
            </div>
          </div>

          <div
            className="card sm-12 md-4 col"
            style={{
              // width: "5rem",
              margin: "2em auto"
            }}
          >
            <wired-card class="API-news" elevation="3">
              <div className="card-body">
                <h4 className="card-title">My awesome Paper card!</h4>
                <h5 className="card-subtitle">Nice looking subtitle.</h5>
                <p className="card-text">
                  This is another example of a card without image. Cards are
                  also meant to be used without images, but with
                  text/links/buttons.
                </p>
                <a className="card-link" href="#">
                  First link
                </a>
                <a className="card-link" href="#">
                  Second link
                </a>
              </div>
            </wired-card>
            <wired-card class="API-news" elevation="3">
              <div className="card-body">
                <h4 className="card-title">My awesome Paper card!</h4>
                <h5 className="card-subtitle">Nice looking subtitle.</h5>
                <p className="card-text">
                  This is another example of a card without image. Cards are
                  also meant to be used without images, but with
                  text/links/buttons.
                </p>
                <a className="card-link" href="#">
                  First link
                </a>
                <a className="card-link" href="#">
                  Second link
                </a>
              </div>
            </wired-card>
          </div>
        </div>
        <div className="row">
          <div class="col-4 col">
            <div className="card">
              <p className="card-text">col-4 col</p>
            </div>
          </div>

          <div class="col-4 col">
            <div className="card">
              <p className="card-text">col-4 col</p>
            </div>
          </div>

          <div class="col-4 col">
            <div className="card">
              <p className="card-text">col-4 col</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolios;
