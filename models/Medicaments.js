const mongoose = require("mongoose");

const MedicamentSchema = mongoose.Schema({
  NomMedicament: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Medicaments", MedicamentSchema);