const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');

// Express app initialization
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// MongoDB connection setup
const mongoURI = 'your_mongodb_connection_string_here';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes setup
app.get('/', (req, res) => {
    res.send('Welcome to Jinails API!');
});

// Other routes can be added here
// app.use('/api/example', require('./routes/example')); // Example route

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
