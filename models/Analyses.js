const mongoose = require("mongoose");

const AnalyseSchema = mongoose.Schema({
  NomAnalyse: {
    type: String,
    required: true
  },
  ResultatAnalyse: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Analyses", AnalyseSchema);