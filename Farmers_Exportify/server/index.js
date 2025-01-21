require('dotenv').config();
const express = require("express");

const app = express();
const pool = require("./db");

app.use(express.json());

app.get('/', (req, res) => res.send('Server is running!!!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));