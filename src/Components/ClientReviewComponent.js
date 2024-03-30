import React from "react";
import { ClientsRatingData } from "./WebSiteData";
export const ClientReviewComponent = () => {
  return (
    <section className="Client-Review-Component text-center container-fluid">
      <h5> CUSTOMER FEEDBACK</h5>

      <h1>
        What Happy Clients Says<span> About Us?</span>{" "}
      </h1>

      <section>
        <div className="row  row-cols-1   ">
          {ClientsRatingData.map((ClientsRatingData, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="card h-100 mb-3">
                  <img
                    src={ClientsRatingData.Image}
                    className="img-fluid rounded-start"
                    alt={ClientsRatingData.ImageALt}
                  />

                  <div className="card-body">
                    <p className="card-text">{ClientsRatingData.ClientStars}</p>
                    <h2 className="card-title">
                      {ClientsRatingData.ClinentName}
                    </h2>
                    <p className="card-text">
                      {ClientsRatingData.ClientReview}
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
