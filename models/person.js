const mongoose = require("mongoose");

// Define the schema for a person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String], // Array of strings
});

// Export the model
module.exports = mongoose.model("Person", personSchema);
