import React from "react";
import { Steps } from "./WebSiteData";
export const WorkProcessHomePage = () => {
  return (
    <section className="Work-Process-HomePage text-center container">
      <h4>Work Process</h4>
      <h1>How To Work It!</h1>
      <div className="row  row-cols-1   " data-aos="zoom-in-up" data-aos-duration="1000">
        {Steps.map((Steps, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card mb-3">
                <img
                  src={Steps.Image}
                  className="img-fluid rounded-start"
                  alt={Steps.ImageALt}
                />

                <div className="card-body">
                  <h5 className="card-title">{Steps.StepTitle}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
