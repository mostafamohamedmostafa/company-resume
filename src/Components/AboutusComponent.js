import React from "react";
import AboutUsComponentImg from "../images/AboutUsComponentImg.png";
import { BsAppIndicator } from "react-icons/bs";
import { BsSuitcaseLg } from "react-icons/bs";
export const AboutusComponent = () => {
  return (
    <section className="AboutusComponent container-fluid bgbg">
      <div class="air air1"></div>
      <div class="air air2"></div>
      <div class="air air3"></div>
      <div class="air air4"></div>
      <div className="row  row-cols-1   ">
        <div className="col-lg-6">
          <div className="card mb-3">
            <div className="card-body">
              <img
                src={AboutUsComponentImg}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card mb-3">
            <div className="card-body">
              <h4 className="card-title">ABOUT US</h4>
              <h1 className="card-title">
                We Are Increasing Business Success With{" "}
                <span>Our Solutions</span>{" "}
              </h1>
              <p className="card-text">
                Proin lectus quam, hendrerit nec sollicitudin et, tempus vel mi.
                Ut ut mattis elit, in suscipit felis. Etiam purus nibh, semper
                id nisi vitae, imperdiet elementum nisi. Cras scelerisque et
                magna sed rutrum. Fusce posuere, tortor et porta rhoncus, dui
                libero tempor ligula, quis gravida sem est eget quam. Nulla
                metus orci
              </p>
            </div>
          </div>

          <div className="row  row-cols-1   ">
            <div className="col-lg-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <h1>
                      <span>
                        {" "}
                        <BsAppIndicator />
                      </span>
                    </h1>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Certified Company</h2>

                      <p className="card-text">Best Provide Skills Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <h1>
                      <span>
                        {" "}
                        <BsSuitcaseLg />
                      </span>
                    </h1>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Expert Team </h2>

                      <p className="card-text">Best Provide Team Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
