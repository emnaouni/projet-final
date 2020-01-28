const mongoose = require("mongoose");

const RDVSchema = mongoose.Schema({
  Heure: {
    type: String,
    required: true
  },
  Medecin_id: {
    type: String,
    required: true
  },
  PattId: {
    type: String,
    required: true
  },
  date: {
    type: String
  }
});

module.exports = mongoose.model("Rdv", RDVSchema);