import React from "react";
import WhyUsImg from "../images/WhyUsImg.png";
import { BsCheck2Square } from "react-icons/bs";

export const WhychooseUsComponent = () => {
  return (
    <section className="Why-chooseUs-Component container-fluid">
      <section className="bgbg">
        <div class="air air1"></div>
        <div class="air air2"></div>
        <div class="air air3"></div>
        <div class="air air4"></div>
        <div className="row  row-cols-1  Why-chooseUs-Component-Inner  " data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="col-lg-6">
            <div className="card mb-3">
              <div className="card-body">
                <h4 className="card-title" data-aos="zoom-in-up" data-aos-duration="1000">WHY CHOOSE US</h4>
                <h2 className="card-title" data-aos="zoom-in-up" data-aos-duration="1000">You Get Business Solution</h2>
                <p className="card-text" data-aos="zoom-in-up" data-aos-duration="1000">
                  Morbi ac ex feugiat justo dapibus interdum ut ut nisi. Nulla
                  ac arcu non augue sollicitudin bibendum. Nunc consequat, dui
                  vel posuere blandit, neque arcu ultrices arcu, vel laoreet
                  nisl erat id risus
                </p>

                <div className="col row  row-cols-1 " data-aos="zoom-in-up" data-aos-duration="1000">
                  <div className="col-6">
                    <div className="card mb-3" data-aos="zoom-in-up" data-aos-duration="1000">
                      <div className="row ">
                        <div className="col-md-4">
                          <span>
                            <BsCheck2Square />
                          </span>{" "}
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Why Choose Us Reason</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="card mb-3" data-aos="zoom-in-up">
                      <div className="row ">
                        <div className="col-md-4">
                          <span>
                            <BsCheck2Square />
                          </span>{" "}
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Why Choose Us Reason</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="card mb-3" data-aos="zoom-in-up">
                      <div className="row ">
                        <div className="col-md-4">
                          <span>
                            <BsCheck2Square />
                          </span>{" "}
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Why Choose Us Reason</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="card mb-3" data-aos="zoom-in-up">
                      <div className="row">
                        <div className="col-md-4">
                          <span>
                            <BsCheck2Square />
                          </span>{" "}
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Why Choose Us Reason</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card mb-3">
              <div className="card-body">
                <img
                  src={WhyUsImg}
                  className="img-fluid rounded-start heartbeat"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
