const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();

// Configure middleware

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local mongoColors database
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoColors";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Import routes and give the server access to them.
// Routes
// =============================================================
require("./routes/controller.js")(app);

// Start the server
app.listen(PORT, () =>
  console.log(`\nListening on port http://localhost:${PORT}`)
);
