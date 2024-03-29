import React from "react";
import FAQImg from "../images/FAQ.png";
export const FAQComponent = () => {
  return (
    <section className="FAQ-Component container">
      <div className="row  row-cols-1    " data-aos="zoom-in-up" data-aos-duration="1000">
        <div className="col-lg-6" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="card  h-100 mb-3">
            <div className="card-body">
              <h4 className="card-title">FAQ'S</h4>
              <h1 className="card-text">Know More About Our Solution</h1>

              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classNamees that we use to style each element.
                      These classNamees control the overall appearance, as well
                      as the showing and hiding via CSS transitions. You can
                      modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="card  h-100 mb-3">
            <div className="card-body">
              <img src={FAQImg} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
