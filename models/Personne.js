const mongoose = require("mongoose");

const PersonneSchema = mongoose.Schema({
  Nom: {
    type: String,
    required: true
  },
  Prenom: {
    type: String,
    required: true
  },
  Role: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Adress: {
    type: String,
    required: false
  },
  UserName: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
 Avatar: {
    type: String,
    required: false
  },
  CIN: {
    type: String,
    required: false
  },
  DateNaiss: {
    type: String,
    required: false
  },
  PrixVisite: {
    type: String,
    required: false
  },
  Specialite: {
    type: String,
    required: false
  },
  Telephone: {
    type: String,
    required: false
  },
  TelephoneCabine: {
    type: String,
    required: false
  },
  AdresseCabinet: {
    type: String,
    required: false
  },
  Rdv: {
    type: Array,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("personne", PersonneSchema);