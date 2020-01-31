const mongoose = require("mongoose");

const DossierMedicalSchema = mongoose.Schema({
  Id_Maladie: {
    type: String,
    // required: true
  },
  Id_Medicament: {
    type: String,
    // required: true
  },
  Id_Analyse: {
    type: String,
    // required: true
  },
  Id_Patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "personnes"
  }
 
});

module.exports = mongoose.model("dossiermedical", DossierMedicalSchema);