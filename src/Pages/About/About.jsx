import React from 'react';
import './About.scss';
import img1 from '../../Assests/24.jpg';

const statsData = [
  {
    icon: 'fa fa-users',
    count: 1630,
    label: 'People Helped',
  },
  {
    icon: 'fa fa-file-medical',
    count: 265,
    label: 'Programs Completed',
  },
  {
    icon: 'fa fa-user-md',
    count: 433,
    label: 'Qualified Therapists',
  },
  {
    icon: 'fa fa-heart',
    count: 1140,
    label: 'Lives Impacted',
  },
];

const skillData = [
  { skill: 'Counseling', percentage: 90 },
  { skill: 'Community Support', percentage: 80 },
  { skill: 'Awareness Campaigns', percentage: 75 },
  { skill: 'Research', percentage: 65 },
];

const About = () => {
  return (
    <div>
      <section id="center" className="center_about">
        <div className="center_om">
          <div className="container-xl">
            <div className="row center_o1 text-center">
              <div className="col-md-12">
                <h1 className="text-white">About Us</h1>
                <h5 className="col_brown mb-0 fs-6">
                  <a className="text-white" href="/">Home</a> <span className="mx-2 text-muted">/</span> About Us
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about_pg" className="p_3">
        <div className="container-xl">
          <div className="row about_pg1">
            <div className="col-md-6">
              <div className="about_pg1l">
                <h3>
                  Promoting <span className="col_brown">Mental Wellness</span> for <br /> Healthy Minds
                </h3>
                <p className="mt-3 fs-5">
                  We believe mental health is as important as physical health and strive to provide accessible support and education.
                </p>
                <p>
                  Our mission is to empower individuals through awareness, counseling, and community-driven support systems. Mental health is a journey, and we walk alongside every individual in that journey.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_pg1r">
                <div className="grid clearfix">
                  <figure className="effect-jazz mb-0">
                    <img src={img1} className="w-100" alt="Mental Health Awareness" />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="about_h2 row mt-4">
            <div className="col-md-6">
              <div className="about_h2l">
                <h3>Our Expertise & Focus Areas</h3>
                <p className="mt-3">
                  We continuously work towards expanding our reach and improving the quality of mental health services for individuals and communities.
                </p>
                <p>
                  Our team specializes in evidence-based counseling, outreach programs, and mental health research, ensuring that support is empathetic and effective.
                </p>
              </div>
            </div>
            <div className="col-md-6 about_h2r">
              {skillData.map(({ skill, percentage }) => (
                <div key={skill}>
                  <h6 className="mt-4">
                    {skill} <span className="float-end col_pink">{percentage}%</span>
                  </h6>
                  <div className="progress-bar mt-3">
                    <div className="progress" style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="qual" className="pt-5 pb-5 bg_dark">
        <div className="container-xl">
          <div className="row qual_1">
            {statsData.map(({ icon, count, label }) => (
              <div key={label} className="col-md-3 col-sm-6">
                <div className="qual_1i row">
                  <div className="col-md-3">
                    <div className="qual_1il">
                      <span className="col_brown fs-1 lh-1"><i className={icon}></i></span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="qual_1ir">
                      <h2 className="text-white">{count}</h2>
                      <h6 className="text-light mb-0">{label}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
