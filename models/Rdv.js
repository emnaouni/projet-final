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
  confirmation: {
    type: Boolean,
    required: true
  },
  suggestion: {
    type: Boolean,
    required: true
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
     ref:"personnes"
  },
  date: {
    type: String
  }
});

module.exports = mongoose.model("Rdv", RDVSchema);