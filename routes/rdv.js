const express = require("express");
const router = express.Router();
const Rdv = require("../models/Rdv");
const auth = require('../middleware/auth')
const { check, validationResult } = require("express-validator")


//Get all rdv d'un patient 
router.get("/patient",auth, (req, res) => {
    Rdv.find({ patient: req.user.id })
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
//Get all rdv d'un medecin
router.get("/medecin",auth, (req, res) => {
    Rdv.find({ Medecin_id: req.user.id })
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
// Add Rdv
router.post("/", [auth, [
    check("Heure", "Please choose the hour").not().isEmpty(),
    check("Medecin_id", "Please Enter ur doctor id").not().isEmpty(),
    check("date", "Please Enter ur date").not().isEmpty()
]], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ errors: errors.array() })
    }
    const { Heure, Medecin_id, date } = req.body;
    let newRDV = new Rdv({
        Heure,
        confirmation: false,
        suggestion:false,
        Medecin_id,
        date,
        patient: req.user.id
    });
    newRDV.save()
        .then(data => res.json(data))
        .catch(err => console.log(err.message))

});


//delete Rdv
router.delete("/:id", (req, res) => {
    Rdv.findByIdAndDelete(req.params.id)
        .then(() => Rdv.find({})
            .then(data => res.json(data))
        )
        .catch(err => console.log(err.message))

});


//Update Rdv(confirmation/suggestion)
router.put("/", auth,(req, res) => {
    const {confirm , _id} = req.body
    Rdv.findByIdAndUpdate({_id },{$set:{confirmation:confirm}})
        .then(() =>  res.json("RDV confirmé"))
        
        .catch(err => console.log(err.message))

});
module.exports = router