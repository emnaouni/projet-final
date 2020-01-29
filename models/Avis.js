const mongoose = require("mongoose");

const AVISchema = mongoose.Schema({
  comentaire: {
    type: String,
    required: true
  },
  Medecin_id: {
    type: String,
    required: true
  },
  Patient_id: {
    type: String,
    required: true
  },
  date: {
    type: String
  }
});

module.exports = mongoose.model("Avis", AVISchema);