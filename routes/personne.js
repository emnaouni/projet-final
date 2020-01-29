const express = require("express");
const router = express.Router();
const Personne = require("../models/Personne");
const { check, validationResult } = require("express-validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtSecrect="secret"
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
// Add Personne
router.post("/", [
    check("Nom", "Please Enter ur Firstname").not().isEmpty(),
    check("Prenom", "Please Enter ur Lastname").not().isEmpty(),
    check("Email", "Please Enter a valide Email").isEmail(),
    check("password", "Password must be 6 or more caracters").not().isEmpty().isLength({ min: 6 })

], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ errors: errors.array() })
    }
    const { Nom, Role,Prenom, Email, password } = req.body;
    Personne.findOne({ Email })
        .then(user => {
            if (user) {
                res.send('User already exist')
            }
            else {
                let newPersonne = new Personne({ Nom,Role, Prenom, Email, password });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newPersonne.password, salt, (err, hashedPassword) => {

                    newPersonne.password=hashedPassword
                    newPersonne.save()
                    const payload={
                        personne:{
                                id: newPersonne.id
                        }
                    }
                    jwt.sign(payload, jwtSecrect,{expiresIn:3600000},(err,token)=>{
                        if(err) throw err
                          res.json({token})
                    })
                    })
                })
                
            }

})
.catch((err)=> console.log(err.message))
});


// //delete medicament
// router.delete("/:id", (req, res) => {
//     Medicaments.findByIdAndDelete(req.params.id)
//     .then(()=>Medicaments.find({})
//     .then( data=> res.json(data))
//     )
//     .catch(err=>console.log(err.message))

//     });


//     //Update medicament
// router.put("/:id", (req, res)=>{
//     const medicament=req.body
// Medicaments.findByIdAndUpdate(req.params.id ,medicament)
// .then(() => Medicaments.findById(req.params.id)
//    .then(data=>res.json(data))
// )
// .catch(err=>console.log(err.message))

// });
module.exports = router