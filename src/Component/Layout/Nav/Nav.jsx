import React from 'react';
import logo from '../../../Assests/Logo.png'

const Nav = () => {
    return (
        <div>
            <section id="top" className="pt-3 pb-3">
                <div className="container-xl">
                    <div className="row top_1">
                        <div className="col-md-4">
                            <div className="top_1l">
                                <img src={logo} alt='logo' style={{ height: "40px" }} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="top_1r">
                                <div className="top_1ri row">
                                    <div className="col-md-4">
                                        <div className="top_1ri1">
                                            <span className="d-inline-block text-center border_1 span_1 rounded-circle float-start me-2"><i className="fa fa-phone"></i></span>
                                            <h6 className="font_14 mb-0"><span className="span_2 fw-bold d-inline-block mb-1">Call Now</span> <br /> +123 4567 890</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="top_1ri1">
                                            <span className="d-inline-block text-center border_1 span_1 rounded-circle float-start me-2"><i className="fa fa-envelope"></i></span>
                                            <h6 className="font_14 mb-0"><span className="span_2 fw-bold d-inline-block mb-1">Send Message</span> <br /> info@gmil.com</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="top_1ri1">
                                            <span className="d-inline-block text-center border_1 span_1 rounded-circle float-start me-2"><i className="fa fa-map-marker"></i></span>
                                            <h6 className="font_14 mb-0"><span className="span_2 fw-bold d-inline-block mb-1">Our Location</span> <br /> 634 Semper Porta</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Nav;
