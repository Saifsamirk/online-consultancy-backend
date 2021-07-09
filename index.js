// Import the necessary packages to be used all over
// index.js
const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./db");

// Initiate Mongo Server
InitiateMongoServer();

// Initialize our express app that we will build our
// apis upon
const app = express();

// Initialize the port that we ought to connect
// to and it is either the one in .env or port 4000
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

// Connect to the url of the apis we are to connect to
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

// Listen to the port we connect to so that the server
// can set to work
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
