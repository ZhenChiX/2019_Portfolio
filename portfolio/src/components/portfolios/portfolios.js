import React, { Component } from "react";
import "./Portfolios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Portfolios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "80vw", margin: "1em auto" }}>
        <div className="row flex-center">
          <div
            className="card sm-12 md-7 col"
            style={{ width: "40rem", margin: "2em auto" }}
          >
            <div className="card portfolio-card">
              <div className="card-header">Harvest Prediction Demo</div>
              <img
                src="https://picsum.photos/300"
                alt="portfolio screen shot"
              />

              <div className="card-body">
                <h4 className="card-title">
                  Harvest Prediction Demo(U.C Davis Department of Plant
                  Sciences)
                </h4>
                <h5 className="card-subtitle">Front-end Developer</h5>
                <p className="card-text">
                  <p>
                    An Harvest Prediction web app take previous bloom Date/End
                    Date/Location to help predict your yield.
                  </p>
                  <p>
                    Work along with
                    <span className="badge"> SAuto </span> backend automation
                    framework.
                  </p>
                </p>
                <wired-card class="wired-card_width" elevation="3">
                  <fieldset>
                    <legend>
                      <span className="badge secondary">My role:</span>
                    </legend>
                    <ul>
                      <p>
                        <li>Validate input to ensure an accurate forecast.</li>
                      </p>

                      <p>
                        <li>
                          Visualizing Data into chart/graph from restAPI for
                          intuitive UI.
                        </li>
                      </p>

                      <p>
                        <li>
                          Worked closely with backend developer to implement the
                          vision.
                        </li>
                      </p>
                    </ul>
                  </fieldset>
                </wired-card>
                <hr />
                <button className="row flex-middle ">Visit site</button>
              </div>
            </div>

            <div className="card portfolio-card">
              <div className="card-header">Guard Impact</div>
              <img
                src="https://picsum.photos/300"
                alt="portfolio screen shot"
              />

              <div className="card-body">
                <h4 className="card-title">
                  Guard Impact -- SoulCalibur VI Framedata
                </h4>
                <h5 className="card-subtitle">Web Developer</h5>
                <p className="card-text">
                  <p>
                    A simple tool to lookup characters framedata for better
                    understand and improve your game plan for{" "}
                    <span className="badge warning">SoulCalibur VI</span>
                  </p>
                  <p />
                </p>
                <wired-card class="wired-card_width" elevation="3">
                  <fieldset>
                    <legend>
                      <span className="badge secondary">My role:</span>
                    </legend>
                    <ul>
                      <p>
                        <li>
                          A Progressive Web App provides SoulCalibur VI
                          framedata.
                        </li>
                      </p>

                      <p>
                        <li>
                          Reached Hundreds of users during beta testing phase.
                        </li>
                      </p>

                      <p>
                        <li>
                          Assured all Characters framedata is being manual
                          testing and automated testing via third party program.
                        </li>
                      </p>
                    </ul>
                  </fieldset>
                </wired-card>
                <hr />
                <button className="row flex-middle ">Visit site</button>
              </div>
            </div>

            <div className="card portfolio-card">
              <div className="card-header">Game Tracker</div>
              <img
                src="https://picsum.photos/300"
                alt="portfolio screen shot"
              />

              <div className="card-body">
                <h4 className="card-title">Game Tracker</h4>
                <h5 className="card-subtitle">Web Developer</h5>
                <p className="card-text">
                  <p>
                    A collection of video game APIs provide gaming NEWS /
                    DATABASE / PRICE CHECKER
                  </p>
                  <p />
                </p>
                <wired-card class="wired-card_width" elevation="3">
                  <fieldset>
                    <legend>
                      <span className="badge secondary">My role:</span>
                    </legend>
                    <ul>
                      <p>
                        <li>
                          Built a website features the latest gaming news and
                          review.
                        </li>
                      </p>

                      <p>
                        <li>Retrieved data from 3 different APIs.</li>
                      </p>

                      <p>
                        <li>
                          Provided deal-tracking function through multiple
                          online vendors.
                        </li>
                      </p>
                    </ul>
                  </fieldset>
                </wired-card>
                <hr />
                <button className="row flex-middle ">Visit site</button>
              </div>
            </div>
          </div>

          <div className="sm-12 md-4 col">
            <div className="card">
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
        </div>
        <div className="row">
          <div class="col-4 col">
            <div className="card">
              <p className="card-text">col-4 col</p>
            </div>
          </div>

          <div className="col-4 col">
            <div className="card">
              <p className="card-text">col-4 col</p>
            </div>
          </div>

          <div className="col-4 col">
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
