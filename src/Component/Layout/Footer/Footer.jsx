import React from 'react';
import logo from '../../../Assests/Logo.png';

const categories = [
    "Depression",
    "Anxiety",
    "Stress Management",
    "Therapy",
    "Self-Care",
    "Mindfulness",
];

const usefulLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Contact", url: "/contact" },
];

const socialLinks = [
    { name: "Facebook", url: "https://facebook.com", iconClass: "fa-brands fa-facebook" },
    { name: "Twitter", url: "https://twitter.com", iconClass: "fa-brands fa-twitter" },
    { name: "Instagram", url: "https://instagram.com", iconClass: "fa-brands fa-instagram" },
    { name: "LinkedIn", url: "https://linkedin.com", iconClass: "fa-brands fa-linkedin" },
];

const Footer = () => {
    return (
        <>
            <div className="clearfix position-relative">
                <div className="main_2 clearfix">
                    <section id="footer">
                        <div className="footer_m p_3">
                            <div className="container-xl">
                                <div className="footer_1 row">
                                    <div className="col-md-4">
                                        <div className="footer_1i">
                                            <div className="top_1l">
                                                <h4 className="mb-0">
                                                    <a className="text-white" href="/">
                                                        <img src={logo} alt="logo" style={{ height: "40px" }} />
                                                    </a>
                                                </h4>
                                                <p className="text-light mt-4">
                                                    We are dedicated to supporting mental wellness through education and care.
                                                </p>
                                                <h5 className="text-white">Follow Us</h5>
                                                <ul className="social-network social-circle mb-0 mt-4">
                                                    {socialLinks.map((social, index) => (
                                                        <li key={index}>
                                                            <a href={social.url} className={`ico${social.name}`} title={social.name} target="_blank" rel="noopener noreferrer">
                                                                <i className={social.iconClass}></i>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="footer_1i">
                                            <h4 className="col_brown mb-4">Categories</h4>
                                            <div className="row footer_1ism">
                                                {categories.map((category, index) => (
                                                    <h6 key={index} className="fw-normal col-md-12 col-6">
                                                        <a className="text-light" href="/">
                                                            {category}
                                                        </a>
                                                    </h6>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="footer_1i">
                                            <h4 className="col_brown mb-4">Useful Links</h4>
                                            <div className="row footer_1ism">
                                                {usefulLinks.map((link, index) => (
                                                    <h6 key={index} className="fw-normal col-md-12 col-6">
                                                        <a className="text-light" href={link.url}>
                                                            {link.name}
                                                        </a>
                                                    </h6>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="footer_1i">
                                            <h4 className="col_brown mb-4">Contact Us</h4>
                                            <p className="text-light">
                                                Supporting thousands in their mental health journey.
                                            </p>
                                            <h6 className="mt-4 text-light">
                                                <i className="fa fa-map-marker col_brown me-2 fs-4 align-middle"></i> 123 Wellness St, Healthy City, USA
                                            </h6>
                                            <h6 className="mt-4 text-light">
                                                <i className="fa fa-phone col_brown me-2 fs-4 align-middle"></i> +1 (800) 123-4567
                                            </h6>
                                            <h6 className="mt-4 text-light mb-0">
                                                <i className="fa fa-envelope col_brown me-2 fs-4 align-middle"></i> contact@mentalhealth.org
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section id="footer_b" className="bg_dark">
                <div className="container-xl">
                    <div className="footer_b1 row text-center">
                        <div className="col-md-12">
                            <p className="mb-0 text-light">
                                © 2025 Mental Health Org. All Rights Reserved | Design by{" "}
                                <a className="col_brown fw-bold" href="https://sahilstm.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    Sahil
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Footer;
