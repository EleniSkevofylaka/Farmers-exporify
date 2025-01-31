import React, { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/inquiries', { name, email, message })
      .then(() => {
        alert('Inquiry submitted successfully!');
      })
      .catch((error) => {
        alert('Failed to submit inquiry.');
        console.error('Error submitting inquiry:', error);
      });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        
        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default ContactPage;
