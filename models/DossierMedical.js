const mongoose = require("mongoose");

const DossierMedicalSchema = mongoose.Schema({
  Id_Maladie: {
    type: String,
    required: true
  },
  Id_Medicament: {
    type: String,
    required: true
  },
  Id_Analyse: {
    type: String,
    required: true
  },
  Id_Patient: {
    type: String,
    required: true
  }
 
});

module.exports = mongoose.model("dossiermedical", DossierMedicalSchema);