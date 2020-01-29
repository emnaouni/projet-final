const express = require("express");
const router = express.Router();

const dossierMedical = require("../models/DossierMedical");


//Get all dossiermedical
router.get("/", (req, res) => {
    dossierMedical.find({})

        .then(data => {
            if (!data) {
                res.json("not found")
            }
            else {
                res.json(data)
            }
        })

        .catch(err => console.log(err.message))
})


// Add dossiermedical
router.post("/", (req, res) => {
    const {Id_Maladie,Id_Medicament,Id_Analyse,Id_Patient} = req.body;
    let newDossier = new dossierMedical({
        Id_Maladie,Id_Medicament,Id_Analyse,Id_Patient
    });
    newDossier
      .save()
      .then(data => res.json(data))
      .catch(err => console.log(err.message));
  });

//delete DossierMedical
router.delete("/:id", (req, res) => {
    dossierMedical.findByIdAndDelete(req.params.id)
        .then(() => dossierMedical.find()

            .then(data => res.json(data))
        )
        .catch(err => console.log(err.message))

});



//Update DossierMedical
router.put("/:id", (req, res) => {
    const des = req.body
    dossierMedical.findByIdAndUpdate(req.params.id, des)
        .then(() => dossierMedical.findById(req.params.id)

            .then(data => res.json(data))
        )
        .catch(err => console.log(err.message))

});

module.exports = router