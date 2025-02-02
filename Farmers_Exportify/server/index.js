const cors = require("cors");
require('dotenv').config();
const express = require("express");

const app = express();
const pool = require("./db");

app.use(cors({
  origin: "http://localhost:3001"  // Allow frontend running on port 3001
}));
app.use(express.json());

/*app.get('/', (req, res) => res.send('Server is running!!!'));*/
app.get('/api/company', async (req, res) => {
  try {
      const result = await pool.query('SELECT * FROM company_info LIMIT 1'); // Fetch only the first entry
      res.json(result.rows[0]);  // Send the company info as a response
  } catch (err) {
      console.error('Error fetching company info:', err);
      res.status(500).send('Error fetching company info');
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching products.');
  }
});


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