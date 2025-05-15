import React from 'react';

import { teamMembers } from '../../../Data/HomeData';

const Team = () => {
  return (
    <section id="team" className="p_3">
      <div className="container-xl">
        <div className="learn_1 row text-center mb-4">
          <h3>Meet Our Mental Wellness Experts</h3>
          <p className="mb-0">Our team is dedicated to supporting your journey towards emotional well-being and resilience.</p>
        </div>
        <div className="team_1 row d-flex align-items-center justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3">
              <div className="team_1i clearfix position-relative">
                <div className="team_1i1 clearfix">
                  <div className="grid clearfix">
                    <figure className="effect-jazz mb-0">
                      <img src={member.image} className="w-100" alt={member.name} />
                    </figure>
                  </div>
                </div>
                <div className="team_1i2 clearfix position-absolute text-center bg_brown p-3 rounded-3">
                  <h5 className="fs-6 text-white">{member.name}</h5>
                  <h6 className="font_14 text-white">{member.role}</h6>
                  <p className="font_14 text-light">{member.description}</p>
                  <ul className="mb-0">
                    {["facebook", "twitter", "linkedin", "instagram"].map((platform) => (
                      <li key={platform} className="d-inline-block mx-1">
                        <a href="/"><i className={`fa-brands fa-${platform} text-white`}></i></a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
