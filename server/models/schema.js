const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  location: String,
  contact: {
    phone: String,
    email: String,
  },
  // other fields...
});

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;
