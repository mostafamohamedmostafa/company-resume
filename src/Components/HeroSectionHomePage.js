import React from "react";
import heroimage from "../images/hero-image.png";
import DataManagementimg from "../images/Data-Management.png";
import ITStrategyimg from "../images/IT-Strategy.png";
import WorldClassSupportimg from "../images/World-Class-Support.png";
import AboutHomePageImg from "../images/AboutHomePage.png";
import { BsCheck2Square } from "react-icons/bs";
export const HeroSection = () => {
  return (
    <section className="Hero-Section  ">
      <section className="bgbg">
        <div class="air air1"></div>
        <div class="air air2"></div>
        <div class="air air3"></div>
        <div class="air air4"></div>
        <div className="row  row-cols-1   ">
          <div className="col-lg-6 " data-aos="zoom-in-up">
            <div className="card h-100 Hero-Left-Card ">
              <div className="card-body">
                <h4>SOLUTION FOR YOUR BUSINESS</h4>
                <h2>
                  Providing Technology For <span> Smart IT Solution</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam dignissim posuere sagittis. Quisque ornare eleifend
                  arcu et condimentum. Aliquam consectetur blandit quam,
                  porttitor malesuada lorem semper ac. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fusce imperdiet lacus non
                  ligula aliquam,
                </p>

                <div className="row  row-cols-1  g-0  ">
                  <div className="col-lg-6 ">
                    <div className="card h-100 ">
                      <div className="card-body">
                        <button className="btn  btn-primary">About Us</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ">
                    <div className="card h-100 ">
                      <div className="card-body">
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasTop"
                          aria-controls="offcanvasTop"
                        >
                          Toggle top offcanvas
                        </button>

                        <div
                          className="offcanvas offcanvas-top"
                          tabindex="-1"
                          id="offcanvasTop"
                          aria-labelledby="offcanvasTopLabel"
                        >
                          <div className="offcanvas-header">
                            <h5
                              className="offcanvas-title"
                              id="offcanvasTopLabel"
                            >
                              Offcanvas top
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="offcanvas-body">...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 " data-aos="zoom-in-up">
            <div className="card h-100 ">
              <div className="card-body">
                <img className="img-fluid heartbeat" src={heroimage}></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Hero-Service-Section ">
        <div className="row  row-cols-1 g-4  ">
          <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="card h-100">
              <img src={DataManagementimg} className="img-fluid"  data-aos="flip-down"  data-aos-duration="2000"></img>
              <div className="card-body">
                <h5>Data Management Service</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam dignissim posuere sagittis. Quisque ornare eleifend
                  arcu et condimentum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="card h-100">
              <img src={WorldClassSupportimg} className="img-fluid"  data-aos="flip-down"  data-aos-duration="2000"></img>
              <div className="card-body">
                <h5>World Class Support</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam dignissim posuere sagittis. Quisque ornare eleifend
                  arcu et condimentum.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="card h-100">
              <img src={ITStrategyimg} className="img-fluid"  data-aos="flip-down"  data-aos-duration="2000"></img>
              <div className="card-body">
                <h5>IT Strategy & Consultancy</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam dignissim posuere sagittis. Quisque ornare eleifend
                  arcu et condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Hero-About-Section">
        <div className="row  row-cols-1   ">
          <div className="col-lg-6" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="card h-100">
              <img src={AboutHomePageImg} className="img-fluid heartbeat"></img>
              <div className="card-body"></div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="card h-100">
              <div className="card-body">
                <h4>ABOUT COMPANY</h4>
                <h1>We've Been Thriving For 45 Years.</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam dignissim posuere sagittis. Quisque ornare eleifend
                  arcu et condimentum. Aliquam consectetur blandit quam,
                  porttitor malesuada lorem semper ac. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Fusce imperdiet lacus non
                  ligula aliquam,
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" data-aos="zoom-in-up" data-aos-duration="1000">
                    <span>
                      <BsCheck2Square />
                    </span>{" "}
                    An item
                  </li>
                  <li className="list-group-item" data-aos="zoom-in-up" data-aos-duration="1000">
                    <span>
                      <BsCheck2Square />
                    </span>{" "}
                    A second item
                  </li>
                  <li className="list-group-item" data-aos="zoom-in-up" data-aos-duration="1000">
                    <span>
                      <BsCheck2Square />
                    </span>{" "}
                    A third item
                  </li>
                  <li className="list-group-item" data-aos="zoom-in-up" data-aos-duration="1000">
                    {" "}
                    <span>
                      <BsCheck2Square />
                    </span>{" "}
                    A fourth item
                  </li>
                  <li className="list-group-item" data-aos="zoom-in-up" data-aos-duration="1000">
                    <span>
                      <BsCheck2Square />
                    </span>{" "}
                    And a fifth one
                  </li>
                </ul>

                <button className="btn btn-warning" data-aos="zoom-in-up" data-aos-duration="1000">About Us More +</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
