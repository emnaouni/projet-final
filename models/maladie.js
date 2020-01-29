const mongoose = require("mongoose");

const MaladieSchema = mongoose.Schema({
  NomMaladie: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("maladies", MaladieSchema);