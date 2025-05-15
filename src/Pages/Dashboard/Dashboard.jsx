import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.scss';

const Dashboard = () => {
  const [consultationBookings, setConsultationBookings] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    const storedConsultations = JSON.parse(localStorage.getItem('consultationForm')) || [];
    const bookings = storedConsultations.map((item, index) => ({
      name: 'Consultation', 
      patient: item.name,
      date: item.date,
      time: 'N/A',
      status: 'Pending',
      issue: item.issue,
      email: item.email,
      id: index,
    }));
    setConsultationBookings(bookings);

    const storedContacts = JSON.parse(localStorage.getItem('contactFormData')) || [];
    setContactMessages(storedContacts);
  }, []);

  const markAsResolved = () => {
    if (selectedIndex !== null) {
      const updated = [...consultationBookings];
      updated[selectedIndex].status = 'Resolved';
      setConsultationBookings(updated);
      setSelectedBooking(updated[selectedIndex]);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <p className="dashboard-subtitle">Manage bookings, doctors, and messages efficiently</p>
      </header>

      <div className="cards-row">
        <div className="card-box">
          <div className="card-icon">
            <i className="bi bi-calendar-check"></i>
          </div>
          <h4>Total Bookings</h4>
          <p>{consultationBookings.length}</p>
        </div>
        <div className="card-box">
          <div className="card-icon">
            <i className="bi bi-person-badge"></i>
          </div>
          <h4>Active Doctors</h4>
          <p>8</p>
        </div>
        <div className="card-box">
          <div className="card-icon">
            <i className="bi bi-envelope"></i>
          </div>
          <h4>New Messages</h4>
          <p>{contactMessages.length}</p>
        </div>
      </div>

      <div className="tables-container">
        <div className="table-box">
          <h3>Consultation Booking List</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Type</th>
                <th>Patient</th>
                <th>Email</th>
                <th>Date</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {consultationBookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.patient}</td>
                  <td>{booking.email}</td>
                  <td>{booking.date}</td>
                  <td>{booking.issue}</td>
                  <td>
                    <span className={`badge ${booking.status === 'Pending' ? 'bg-warning text-dark' : 'bg-success'}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#viewModal"
                      onClick={() => {
                        setSelectedBooking(booking);
                        setSelectedIndex(index);
                      }}
                      disabled={booking.status === 'Resolved'}
                      title={booking.status === 'Resolved' ? 'Already Resolved' : 'View'}
                    >
                      <i className="bi bi-eye"></i> View
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteConfirmModal"
                      onClick={() => setDeleteIndex(index)}
                      title="Delete"
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
              {consultationBookings.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center">No bookings available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="table-box">
          <h3>Contact Us Messages</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contactMessages.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.message}</td>
                </tr>
              ))}
              {contactMessages.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center">No messages available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="modal fade"
        id="viewModal"
        tabIndex="-1"
        aria-labelledby="viewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="viewModalLabel">Booking Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setSelectedBooking(null);
                  setSelectedIndex(null);
                }}
              ></button>
            </div>
            <div className="modal-body">
              {selectedBooking ? (
                <>
                  <p><strong>Type:</strong> {selectedBooking.name}</p>
                  <p><strong>Patient:</strong> {selectedBooking.patient}</p>
                  <p><strong>Email:</strong> {selectedBooking.email}</p>
                  <p><strong>Date:</strong> {selectedBooking.date}</p>
                  <p><strong>Issue:</strong> {selectedBooking.issue}</p>
                  <p>
                    <strong>Status:</strong>{' '}
                    <span className={`badge ${selectedBooking.status === 'Pending' ? 'bg-warning text-dark' : 'bg-success'}`}>
                      {selectedBooking.status}
                    </span>
                  </p>
                </>
              ) : (
                <p>No booking selected.</p>
              )}
            </div>
            <div className="modal-footer">
              {selectedBooking && selectedBooking.status === 'Pending' && (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={markAsResolved}
                  data-bs-dismiss="modal"
                >
                  Mark as Resolved
                </button>
              )}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setSelectedBooking(null);
                  setSelectedIndex(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="deleteConfirmModal"
        tabIndex="-1"
        aria-labelledby="deleteConfirmModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteConfirmModalLabel">Confirm Delete</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDeleteIndex(null)}
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this booking?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setDeleteIndex(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  if (deleteIndex !== null) {
                    const updated = consultationBookings.filter((_, i) => i !== deleteIndex);
                    setConsultationBookings(updated);
                    setDeleteIndex(null);
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
