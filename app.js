const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config(); 

// Create express server
const app = express();

// Database
dbConnection();

// CORS
app.use( cors() );

// Lecture and body parse
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth') );

app.listen( process.env.PORT, () => {
    console.log(`Server running in port ${ process.env.PORT }`);
});
