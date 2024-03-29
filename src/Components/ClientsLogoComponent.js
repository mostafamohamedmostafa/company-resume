import React from "react";
import { ClientsLogo } from "./WebSiteData";

export const ClientsLogoComponent = () => {
  return (
    <section className="Clients-Logo-Component">
      <div className="row  row-cols-1   ">
        {ClientsLogo.map((ClientsLogo, index) => {
          return (
            <div className="col-2" key={index} data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="card mb-3">
                <img
                  src={ClientsLogo.Image}
                  className="img-fluid rounded-start"
                  alt={ClientsLogo.ImageALt}
                />

                <div className="card-body"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
