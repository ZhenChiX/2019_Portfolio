import React, { Component } from "react";
import "./Portfolios.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import portfolio_logo from "../../img/chi-portfolio-logo.PNG";
import desktop_hp1 from "../../img/mockup/desktop-hp1.png";
import desktop_hp2 from "../../img/mockup/desktop-hp2.png";
import mobile_hp1 from "../../img/mockup/mobile-hp1.png";
import mobile_hp2 from "../../img/mockup/mobile-hp2.png";
import desktop_gi1 from "../../img/mockup/desktop-gi1.png";
import desktop_gi2 from "../../img/mockup/desktop-gi2.png";
import mobile_gi1 from "../../img/mockup/mobile-gi1.png";
import mobile_gi2 from "../../img/mockup/mobile-gi2.png";
import desktop_gt1 from "../../img/mockup/desktop-gt1.png";
import desktop_gt2 from "../../img/mockup/desktop-gt2.png";
import mobile_gt1 from "../../img/mockup/mobile-gt1.png";
import mobile_gt2 from "../../img/mockup/mobile-gt2.png";

class Portfolios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideOnThumbnailOver: true
    };
  }

  render() {
    const images_hp = [
      {
        original: desktop_hp1,
        thumbnail: desktop_hp1
      },
      {
        original: desktop_hp2,
        thumbnail: desktop_hp2
      },
      {
        original: mobile_hp1,
        thumbnail: mobile_hp1
      },
      {
        original: mobile_hp2,
        thumbnail: mobile_hp2
      }
    ];

    const images_gi = [
      {
        original: desktop_gi1,
        thumbnail: desktop_gi1
      },
      {
        original: desktop_gi2,
        thumbnail: desktop_gi2
      },
      {
        original: mobile_gi1,
        thumbnail: mobile_gi1
      },
      {
        original: mobile_gi2,
        thumbnail: mobile_gi2
      }
    ];
    const images_gt = [
      {
        original: desktop_gt1,
        thumbnail: desktop_gt1
      },
      {
        original: desktop_gt2,
        thumbnail: desktop_gt2
      },
      {
        original: mobile_gt1,
        thumbnail: mobile_gt1
      },
      {
        original: mobile_gt2,
        thumbnail: mobile_gt2
      }
    ];

    return (
      <div className="portfolio-page">
        <div className="row flex-center">
          <img
            className="portfolio_logo sm-0 md-2 col"
            src={portfolio_logo}
            alt="portfolio logo."
          />
          <div
            className="card sm-12 md-6 col"
            style={{ width: "40rem", margin: "2em auto" }}
          >
            <div className="card portfolio-card">
              <div className="card-header">Harvest Prediction Demo</div>

              <ImageGallery
                items={images_hp}
                lazyLoad={true}
                showNav={false}
                showPlayButton={false}
                thumbnailPosition="right"
                showBullets={true}
                slideOnThumbnailOver={this.state.slideOnThumbnailOver}
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
              <ImageGallery
                items={images_gi}
                lazyLoad={true}
                showNav={false}
                showPlayButton={false}
                thumbnailPosition="right"
                showBullets={true}
                slideOnThumbnailOver={this.state.slideOnThumbnailOver}
              />

              <div className="card-body">
                <h4 className="card-title">
                  Guard Impact -- SoulCalibur VI Framedata
                </h4>
                <h5 className="card-subtitle">Web Developer</h5>
                <p className="card-text">
                  <p>
                    A simple tool to lookup characters framedata for better
                    understand and improve your game plan for
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
              <ImageGallery
                items={images_gt}
                lazyLoad={true}
                showNav={false}
                showPlayButton={false}
                thumbnailPosition="right"
                showBullets={true}
                slideOnThumbnailOver={this.state.slideOnThumbnailOver}
              />

              <div className="card-body">
                <h4 className="card-title">
                  Game Tracker -- Video game database
                </h4>
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

          <div className="sm-12 md-3 col">
            <div className="card">
              <wired-card class="API-news" elevation="3">
                <div className="card-body">
                  <h4 className="card-title">Website Revamping</h4>
                  <h5 className="card-subtitle">Coming soon...</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odio quibusdam similique rem culpa alias eum!
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
                  <h4 className="card-title">Website Revamping</h4>
                  <h5 className="card-subtitle">Coming soon...</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odio quibusdam similique rem culpa alias eum!
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
      </div>
    );
  }
}

export default Portfolios;
