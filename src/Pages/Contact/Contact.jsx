import React, { useState } from 'react';
import './Contact.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const { name, email, subject, message } = formData;
    
        if (!name || !email || !subject || !message) {
            toast.error("Please fill all required fields!");
            return;
        }
    
        setLoading(true);
    
        setTimeout(() => {
            const existingDataRaw = localStorage.getItem('contactFormData');
            let existingData = [];
    
            if (existingDataRaw) {
                try {
                    existingData = JSON.parse(existingDataRaw);
                } catch (error) {
                    existingData = [];
                }
            }
    
            if (!Array.isArray(existingData)) {
                existingData = [];
            }
    
            existingData.push(formData);
    
            localStorage.setItem('contactFormData', JSON.stringify(existingData));
    
            toast.success("Your message has been sent successfully!");
            setLoading(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        }, 2000);
    };
    
    return (
        <div>
            <ToastContainer position="top-center" />

            <section id="center" className="center_contact">
                <div className="center_om">
                    <div className="container-xl">
                        <div className="row center_o1 text-center">
                            <div className="col-md-12">
                                <h1 className="text-white">Reach Out to Us</h1>
                                <h5 className="col_brown mb-0 fs-6">
                                    <a className="text-white" href="/">Home</a>
                                    <span className="mx-2 text-muted">/</span> Contact
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="p_3">
                <div className="container-xl">
                    <div className="contact_1 row">
                        <div className="col-md-8">
                            <div className="contact_1l">
                                <h4 className="mb-3">We're Here to Listen. Fill Out the Form Below</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="blog_dt1r5i row">
                                        <div className="col-md-6">
                                            <input
                                                className="form-control bg_light border-0"
                                                placeholder="Your Full Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                className="form-control bg_light border-0"
                                                placeholder="Your Email Address"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                            />
                                        </div>
                                    </div>

                                    <div className="blog_dt1r5i row mt-3">
                                        <div className="col-md-6">
                                            <input
                                                className="form-control bg_light border-0"
                                                placeholder="Phone Number (Optional)"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                type="text"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                className="form-control bg_light border-0"
                                                placeholder="Subject (e.g., Therapy, Volunteering)"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className="blog_dt1r5i row mt-3">
                                        <div className="col-md-12">
                                            <textarea
                                                placeholder="How can we support you?"
                                                className="form-control form_text bg_light border-0"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                            <h6 className="mb-0 mt-3">
                                                <button className="button" type="submit" disabled={loading}>
                                                    {loading ? "Sending..." : "Send Message"}
                                                </button>
                                            </h6>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact_1r">
                                <div className="contact_1r1 bg_brown rounded-3 p-4">
                                    <span className="text-white float-start lh-1 me-3 fs-1">
                                        <i className="fa fa-map-marker"></i>
                                    </span>
                                    <p className="font_14 text-light mb-0">
                                        Peaceful Minds HQ, 123 Wellness Avenue, New Delhi, India
                                    </p>
                                </div>

                                <div className="contact_1r1 bg_light rounded-3 p-4 mt-4">
                                    <span className="float-start lh-1 me-3 fs-1">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                    <p className="font_14 mb-0">
                                        support@peacefulminds.org<br />
                                        Mon-Fri 9:00am - 6:00pm
                                    </p>
                                </div>

                                <div className="contact_1r1 bg_dark rounded-3 p-4 mt-4">
                                    <span className="float-start text-white lh-1 me-3 fs-1">
                                        <i className="fa fa-phone"></i>
                                    </span>
                                    <p className="font_14 text-light mb-0">
                                        +91 98765 43210<br />
                                        Confidential Support Available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact_2 row mt-4">
                        <div className="col-md-12">
                            <iframe
                                title="Google Map of Office"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.4965836782317!2d85.50802017699603!3d26.568435776854194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1166eaf279d%3A0xc74e435937c69504!2sLevelUp%20Solutions!5e0!3m2!1shi!2sin!4v1747268445050!5m2!1shi!2sin"
                                height="450"
                                style={{ border: 0, width: "100%" }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
