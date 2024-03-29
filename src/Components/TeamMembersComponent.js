import React from "react";
import { TeamMembersData } from "./WebSiteData";
const TeamMembersComponent = () => {
  return (
    <section className="Team-Members-Component text-center container">
      <h5>Our Team</h5>
      <h1>
        See Our Skilled Expert <span>TEAM</span>
      </h1>

      <section>
        <div className="row  row-cols-1   ">
          {TeamMembersData.map((TeamMembersData, index) => {
            return (
              <div className="col-lg-3" key={index}>
                <div className="card h-100 mb-3">
                  <img
                    src={TeamMembersData.Image}
                    className="img-fluid rounded-start"
                    alt={TeamMembersData.ImageALt}
                  />

                  <div className="card-body">
                    <h2 className="card-title">
                      {TeamMembersData.MemberName}{" "}
                    </h2>
                    <p className="card-text">{TeamMembersData.MemberJob}</p>
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

export default TeamMembersComponent;
