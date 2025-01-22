require('dotenv').config();
const express = require("express");

const app = express();
const pool = require("./db");

app.use(express.json());

app.get('/', (req, res) => res.send('Server is running!!!'));

// Contact Form Route
app.post('/api/inquiries', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      const result = await pool.query(
        'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
        [name, email, message]
      );
      res.status(200).send('Message submitted successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error submitting message');
    }
  });
  


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));