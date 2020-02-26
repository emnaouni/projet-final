const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')
const dossierMedical = require("../models/DossierMedical");
const mongoose = require('mongoose')

const Visite = require("../models/visite");

//Get dossier medical patient for patient


router.get("/patientDossier", auth, (req, res) => {
    let id = mongoose.Types.ObjectId(req.user.id)
    console.log(req.user.id)
    dossierMedical.findOne({Id_Patient: id })
        .then(data => {
            if (!data) {
                res.json("user not found")
            }
            else {
                res.json(data)

                // Visite.find({Id_DossierMedical: data._id})
                //     .then(dossier => console.log(dossier))
            }
        })
        .catch(err => console.log(err.message))
})


//Get dossiermedical for  medecin
router.get("/patient/:id", (req, res) => {
    dossierMedical.findOne({Id_Patient:req.params.id})

        .then(data => {
            if (!data) {
                res.json("not found !!!!!!!!!!!!!")
            }
            else {
                res.json(data)
            }
        })

        .catch(err => console.log(err.message))
})
//Get All Cons byDoctor




// Add dossiermedical
router.post("/", auth,(req, res) => {
    const {Id_Maladie,Id_Medicament,Id_Analyse,Id_Patient} = req.body;
    let newDossier = new dossierMedical({
        Id_Maladie,
        Id_Medicament,
        Id_Analyse,
        Id_Patient: req.user.id
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
router.put("/:id",auth, (req, res) => {
    const des = req.body
    dossierMedical.findByIdAndUpdate(req.params.id, des)
        .then(() => dossierMedical.findById(req.params.id)

            .then(data => res.json(data))
        )
        .catch(err => console.log(err.message))

});

module.exports = router