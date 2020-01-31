const express = require("express");
const router = express.Router();
const visite = require("../models/visite");
const auth = require('../middleware/auth');
const dossierMedical = require("../models/DossierMedical");
const { check, validationResult } = require("express-validator")


//Get all visits byDoctor

router.get("/medecin",auth, (req, res) => {
    visite.find({ medecin: req.user.id })
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

//get all visits
router.get("/", auth, (req, res) => {
    dossierMedical.find({Id_Patient: req.user.id })
                    .then(dossier => visite.find({Id_DossierMedical: dossier._id})
                                            .then(visites=>res.send(visites))
                                            .catch(err => console.log(err.message))
        
                            
        )
    .catch(err => console.log(err));
});

// add visite

router.post("/:idDossier", [auth, [
    // check("Id_DossierMedical", "").not().isEmpty(),
    // check("Id_Medicament", "").not().isEmpty(),
    check("Remarque", "").not().isEmpty(),


]], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ errors: errors.array() })
    }
    const { Id_DossierMedical, Id_Medicament, Remarque } = req.body;
    let newVisite = new visite({
        Id_DossierMedical: req.params.idDossier,
        Id_Medicament,
        Date,
		Remarque,
        medecin: req.user.id
    });
    newVisite.save()
        .then(data => res.json(data))
        .catch(err => console.log(err.message))

});




module.exports = router
