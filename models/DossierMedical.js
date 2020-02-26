const mongoose = require("mongoose");

const DossierMedicalSchema = mongoose.Schema({
  Id_Patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"personnes"
    // type: String,
    // required: true
  },
  Id_Maladie: {
    type: Array,
    // required: true
  },
  Id_Medicament: {
    type: Array,
    // required: true
  },
  Id_Analyse: {
    type: Array,
    // required: true
  }
 
}); 

module.exports = mongoose.model("dossiermedical", DossierMedicalSchema);