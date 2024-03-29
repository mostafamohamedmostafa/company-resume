import React from "react";
import { ProjectsData } from "./WebSiteData";
export const ProjectsComponent = () => {
  return (
    <section className="Projects-Component container-fluid text-center">
      <h4>Portfolio </h4>
      <h2>Portfolio & Projects</h2>
      <div className="row  row-cols-1   " data-aos="zoom-in-up" data-aos-duration="1000">
        {ProjectsData.map((ProjectsData, index) => {
          return (
            <div className="col-lg-4" key={index}>
              <div className="card mb-3">
                <img
                  src={ProjectsData.Image}
                  className="img-fluid rounded-start"
                  alt={ProjectsData.ImageALt}  data-aos="flip-down"  data-aos-duration="2000"
                />

                <div className="card-body">
                  <h5 className="card-title">{ProjectsData.ServiceTitle}</h5>
                  <p className="card-text">{ProjectsData.Description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
