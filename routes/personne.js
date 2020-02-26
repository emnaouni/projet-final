const express = require("express");
const router = express.Router();
const Personne = require("../models/Personne");
const { check, validationResult } = require("express-validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtSecrect = "secret"
//GetPAtient with CIN
router.get("/patienDossier/:CIN", (req, res) => {
    Personne.findOne({CIN:req.params.CIN})

        .then(data => {
            if (!data) {
                res.json("not found Patient!!!!!!!!!!!!!")
            }
            else {
                res.json(data)
            }
        })

        .catch(err => console.log(err.message))
})

router.get("/patienDossierr/:id", (req, res) => {
    Personne.findById(req.params.id)
      .then(data => {
            if (!data) {
                res.json("not found Patient!!!!!!!!!!!!!")
            }
            else {
                res.json(data)
            }
        })

        .catch(err => console.log(err.message))
})
//Get all Personnes
router.get("/", (req, res) => {
    Personne.find({})
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
//Get all doctors
router.get("/medecin", (req, res) => {
    Personne.find({Role:"medecin"})
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


//Get all patient
router.get("/patient", (req, res) => {
    Personne.find({Role:"patient"})


//GET liste RDV par medecin 
router.get("/rdv/:id", (req, res) => {
    Personne.findById(req.params.id)

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

// Add Personne
router.post("/", [
    check("Nom", "Please Enter ur Firstname").not().isEmpty(),
    check("Prenom", "Please Enter ur Lastname").not().isEmpty(),
    check("Email", "Please Enter a valide Email").isEmail(),
    check("password", "Password must be 6 or more caracters").isLength({ min: 6 })

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ errors: errors.array() })
    }
    const { Nom, Role, Prenom, Email, password ,AdresseCabinet ,Specialite,Adress,Telephone,DateNaiss,CIN} = req.body;
    Personne.findOne({ Email })
        .then(user => {
            if (user) {
                res.send({msg:'User already exist!!'})
            }
            else {
                let newPersonne = new Personne({ Nom, Role, Prenom, Email, password ,AdresseCabinet ,Specialite,Adress,Telephone,DateNaiss,CIN });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newPersonne.password, salt, (err, hashedPassword) => {
                        newPersonne.password = hashedPassword
                        newPersonne.save()
                        const payload = {
                            personne: {
                                id: newPersonne.id,
                                role: newPersonne.Role
                            }
                        }
                        jwt.sign(payload, jwtSecrect, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.json({ token })
                        })
                    })
                })

            }

        })
        .catch((err) => {
            res.send({msg: "Server Error"})
            console.log(err.message)
        })
});


//delete personne
router.delete("/:id", (req, res) => {
    Personne.findByIdAndDelete(req.params.id)
        .then(() => Personne.find({})
            .then(data => res.json(data))
        )
        .catch(err => console.log(err.message))

});


//Update personne
router.put("/:id", (req, res) => {
    const pers = req.body
    Personne.findByIdAndUpdate(req.params.id, pers)
        .then(() => Personne.findById(req.params.id)
            .then(data => res.json(data))
        )
        .catch(err => console.log(err.message))

});


//put RDV
router.put("/Rdvpatient/:id", (req, res) => {
    const daterdv = req.body
    Personne.findByIdAndUpdate(req.params.id,{$push:{Rdv:daterdv}})
        .then(() => Personne.findById(req.params.id)
            .then(data => res.json(data))
        )
        .catch(err => console.log(err.message))

});

module.exports = router