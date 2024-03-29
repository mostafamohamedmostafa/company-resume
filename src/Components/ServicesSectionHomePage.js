import React from "react";
import {
  ServiceHeroSection1Data,
  ServiceHeroSection2Data,
} from "./WebSiteData";
export const ServicesSectionHomePage = () => {
  return (
    <section className="Services-Section-HomePage">
      <section className="Services-Section-HomePage-SectionOne container text-center">
        <div className="row  row-cols-1   " data-aos="zoom-in-up" data-aos-duration="1000">
          {ServiceHeroSection1Data.map((ServiceHeroSection1Data, index) => {
            return (
              <div className="col-lg-3 col-6 " data-aos="zoom-in-up" key={index}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={ServiceHeroSection1Data.Image}
                        className="img-fluid rounded-start"
                        alt={ServiceHeroSection1Data.ImageALt}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <strong>
                            {ServiceHeroSection1Data.NumberService}
                          </strong>
                        </h5>
                        <p className="card-text">
                          {ServiceHeroSection1Data.Description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="Services-Section-SectionTwo container text-center">
        <h4 data-aos="zoom-in-up" data-aos-duration="1000">OUR SERVICES </h4>
        <h2 data-aos="zoom-in-up" data-aos-duration="1000">We Provide Exclusive Services</h2>

        <div className="row  row-cols-1   " data-aos="zoom-in-up" data-aos-duration="1000">
          {ServiceHeroSection2Data.map((ServiceHeroSection2Data, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="card mb-3">
                  <img
                    src={ServiceHeroSection2Data.Image}
                    className="img-fluid rounded-start"
                    alt={ServiceHeroSection2Data.ImageALt}
                  />

                  <div className="card-body">
                    <h5 className="card-title">
                      {ServiceHeroSection2Data.ServiceTitle}
                    </h5>
                    <p className="card-text">
                      {ServiceHeroSection2Data.Description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};
