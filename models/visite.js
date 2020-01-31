const mongoose = require("mongoose");

const visiteSchema = mongoose.Schema({
  Id_DossierMedical: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"dossiermedicals"
    // type: String,
    // required: true
  },
  Id_Medicament: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default :Date.now
  },
  Remarque: {
    type: String,
    // required: true
  },
  medecin: {
    type: mongoose.Schema.Types.ObjectId,
     ref:"personnes"
  },

});

module.exports = mongoose.model("visite", visiteSchema);