import React from "react";
import Clients1 from "../images/Clients1.png";
import Clients2 from "../images/Clients2.png";
import Clients3 from "../images/Clients3.png";

export const TestimonialsComponent = () => {
  return (
    <section className="Testimonials-Component  container ">
      <div className="row  row-cols-1    " data-aos="zoom-in-up" data-aos-duration="1000">
        <div className="col-lg-6">
          <div className="card  bg-pan-left mb-3 ">
            <div className="card-body">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="card" >
                      <img src={Clients1} className="card-img-top" alt="..." />
                      <div className="card-body">
                         <h5 className="card-title"> </h5>
                        <p className="card-text">
                          Fusce sed lacus aliquet, commodo nibh id, ornare nibh.
                          Ut sit amet augue ut libero aliquet porta. Maecenas
                          eget hendrerit neque. Praesent ornare purus sed magna
                          malesuada fringilla. Maecenas imperdiet in est vel
                          placerat. Duis quis nulla vel libero ultrices
                          condimentum vitae in quam
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="card">
                      <img src={Clients2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Clients 2 </h5>
                        <p className="card-text">
                          Fusce sed lacus aliquet, commodo nibh id, ornare nibh.
                          Ut sit amet augue ut libero aliquet porta. Maecenas
                          eget hendrerit neque. Praesent ornare purus sed magna
                          malesuada fringilla. Maecenas imperdiet in est vel
                          placerat. Duis quis nulla vel libero ultrices
                          condimentum vitae in quam
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="card">
                      <img src={Clients3} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Clients 3 </h5>
                        <p className="card-text">
                          Fusce sed lacus aliquet, commodo nibh id, ornare nibh.
                          Ut sit amet augue ut libero aliquet porta. Maecenas
                          eget hendrerit neque. Praesent ornare purus sed magna
                          malesuada fringilla. Maecenas imperdiet in est vel
                          placerat. Duis quis nulla vel libero ultrices
                          condimentum vitae in quam
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
