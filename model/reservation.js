// Import the necessary packages to used all over
// the model
const mongoose = require("mongoose");

// Create a schema for the users registered within
// our database
const ReservationSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Export model user with UserSchema
module.exports = mongoose.model("reservation", ReservationSchema);
