import React from 'react';
import about1 from '../../../Assests/About/1.jpg';
import about2 from '../../../Assests/About/2.jpg';
import '../../../Styles/component/home/about.scss';

const About = () => {
    return (
        <div>
            <section id="about_h" className="p_3">
                <div className="container-xl">
                    <div className="about_h1 row">
                        <div className="col-md-6">
                            <div className="about_h1l clearfix position-relative">
                                <div className="about_h1l1 clearfix">
                                    <img src={about1} className="rounded-3" alt="Mental Health Awareness" />
                                </div>
                                <div className="about_h1l2 clearfix position-absolute w-100 text-end">
                                    <img src={about2} className="rounded-3" alt="Community Engagement" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_h1r">
                                <h2>Empowering Minds, Transforming Lives</h2>
                                <p className="mt-3 fs-5">We are dedicated to breaking the stigma around mental health and building a supportive, understanding, and emotionally resilient society.</p>
                                <p>Through education, workshops, and one-on-one support, we help individuals of all ages navigate challenges such as stress, anxiety, and emotional burnout — promoting wellness and inner strength.</p>
                                <h6 className="fw-bold mt-4">
                                    <i className="fa fa-check-circle col_brown align-middle me-2"></i> Free Online Resources & Toolkits
                                </h6>
                                <h6 className="fw-bold mt-3">
                                    <i className="fa fa-check-circle col_brown align-middle me-2"></i> Certified Counselors & Volunteers
                                </h6>
                                <h6 className="fw-bold mt-3">
                                    <i className="fa fa-check-circle col_brown align-middle me-2"></i> Youth & Educator Mental Health Programs
                                </h6>
                                <h6 className="fw-bold mt-3">
                                    <i className="fa fa-check-circle col_brown align-middle me-2"></i> Confidential Support & Helpline
                                </h6>
                                <h6 className="mb-0 mt-4">
                                    <a className="button" href="/">Learn More</a>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="about_h2 row">
                        <div className="col-md-6">
                            <div className="about_h2l mt-5 pt-5">
                                <h3>Our Impact in the Community</h3>
                                <p className="mt-3">Every step we take brings someone closer to emotional healing. Our mission is backed by real outcomes and compassionate outreach.</p>
                                <p>We’ve reached thousands through our campaigns, supported students in distress, trained educators, and built safe spaces for open dialogue. Together, we’re shaping a mentally healthier future.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about_h2r">
                                <h6 className="">Awareness Campaigns <span className="float-end col_pink">92%</span></h6>
                                <div className="progress-bar mt-3">
                                    <div className="progress" style={{ width: '92%' }}></div>
                                </div>
                                <h6 className="mt-4">Counseling Sessions <span className="float-end col_pink">85%</span></h6>
                                <div className="progress-bar mt-3">
                                    <div className="progress" style={{ width: '85%' }}></div>
                                </div>
                                <h6 className="mt-4">Workshops & Webinars <span className="float-end col_pink">78%</span></h6>
                                <div className="progress-bar mt-3">
                                    <div className="progress" style={{ width: '78%' }}></div>
                                </div>
                                <h6 className="mt-4">Community Outreach <span className="float-end col_pink">88%</span></h6>
                                <div className="progress-bar mt-3">
                                    <div className="progress" style={{ width: '88%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
