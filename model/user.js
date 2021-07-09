// Import the necessary packages to used all over
// the model
const mongoose = require("mongoose");

// Create a schema for the users registered within
// our database
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
