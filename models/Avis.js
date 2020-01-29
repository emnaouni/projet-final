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
    type: String,
    default : Date.now()
  }
});

module.exports =Avis = mongoose.model("Avis", AVISchema);