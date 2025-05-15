import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../Assests/Logo.png';

const Header = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    issue: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    }
    if (!formData.date) newErrors.date = 'Preferred Date is required';
    if (!formData.issue.trim()) newErrors.issue = 'Please describe your issue';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please complete all required fields before booking your consultation.");
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      const existingDataRaw = localStorage.getItem('consultationForm');
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
      localStorage.setItem('consultationForm', JSON.stringify(existingData));

      setLoading(false);
      toast.success("Your consultation request has been submitted! A doctor will contact you soon.");
      setFormData({ name: '', email: '', date: '', issue: '' });
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    setIsLoggedIn(false);
    toast.success("You have been logged out.");
    window.location.href = "/";
  };


  useEffect(() => {
    const loggedIn = localStorage.getItem("login") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div>

      <section id="header">
        <nav className="navbar navbar-expand-md navbar-light bg_light p-0" id="navbar_sticky">
          <div className="container-xl">
            <a className="col_brown navbar-brand p-0 fw-bold me-5" href="/">
              <img src={logo} alt="logo" style={{ height: '40px' }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/group-discussion">
                Discussion
                </a>
              </li>
                {isLoggedIn && (
                  <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                      Go to Dashboard
                    </a>
                  </li>
                )}

              </ul>
              <ul className="navbar-nav mb-0 ms-auto">
                {isLoggedIn ? (
                  <li className="nav-item">
                    <button className="nav-link btn btn-link text-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login as administrator
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <button
                    className="button_1"
                    data-bs-toggle="modal"
                    data-bs-target="#consultationModal"
                  >
                    Book Consultation with Doctor
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <div
        className="modal fade"
        id="consultationModal"
        tabIndex="-1"
        aria-labelledby="consultationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="consultationModalLabel">
                Book Consultation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                disabled={loading}
              ></button>
            </div>
            <div className="modal-body">
              <p>Fill your details and we'll connect you with a mental health expert.</p>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                    value={formData.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={handleChange}
                    disabled={loading}
                    date
                  />
                  {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Describe your issue</label>
                  <textarea
                    name="issue"
                    className={`form-control ${errors.issue ? 'is-invalid' : ''}`}
                    style={{ minHeight: '120px' }}
                    placeholder="Describe your issue"
                    value={formData.issue}
                    onChange={handleChange}
                    disabled={loading}
                  />
                  {errors.issue && <div className="invalid-feedback">{errors.issue}</div>}
                </div>
                <button
                  type="submit"
                  className="button_1"
                  disabled={loading}
                  style={{ minWidth: '120px', position: 'relative' }}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>{' '}
                      Loading...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="colored"
      />
    </div>
  );
};

export default Header;
