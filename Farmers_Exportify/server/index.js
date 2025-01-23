require('dotenv').config();
const express = require("express");

const app = express();
const pool = require("./db");

app.use(express.json());

app.get('/', (req, res) => res.send('Server is running!!!'));

// Contact Form Route

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  app.post('/api/inquiries', async (req, res) => {
    const { name, email, message } = req.body;
  
    // Check for missing fields
    if (!name || !email || !message) {
      return res.status(400).send('All fields are required.');
    }
  
    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).send('Invalid email format.');
    }
  
    // Validate message length
    if (message.length < 10 || message.length > 500) {
      return res
        .status(400)
        .send('Message must be between 10 and 500 characters.');
    }
  
    try {
      const result = await pool.query(
        'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
        [name, email, message]
      );
      res.status(200).send('Message submitted successfully.');
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred. Please try again later.');
    }
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));