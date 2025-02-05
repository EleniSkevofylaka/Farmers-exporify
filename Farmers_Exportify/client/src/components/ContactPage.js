import React, { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/inquiries', { name, email, message })
      .then(() => {
        alert('Inquiry submitted successfully!');
      })
      .catch((error) => {
        alert(`Failed to submit inquiry: ${error.response ? error.response.data : error.message}`);
        console.error('Error submitting inquiry:', error);
      });
  };

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-success text-center mb-4">Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
            <div className="mb-3">
              <label className="form-label fw-bold">Name:</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email:</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Message:</label>
              <textarea className="form-control" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>

            <button type="submit" className="btn btn-success w-100">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
