// Import the necessary packages for the database
const mongoose = require("mongoose");

// Connect with the database created within the mongoDB account
const MONGOURI =
  "mongodb+srv://ahmed_saber1994:ahmed_saber1994@cluster0.k6unt.mongodb.net/test";

// Create an asynchronous function to connect to our database
const InitiateMongoServer = async () => {
  // Handle the success case of the connection request
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    // Handle the failure case of the connection request
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
