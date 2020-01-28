const express = require("express");
const router = express.Router();
const Medicaments = require("../models/Medicaments");


//Get all medicaments
router.get("/", (req, res) => {
     Medicaments.find({})
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
// Add medicament
router.post("/", (req, res) => {
    const NomMedicament = req.body;
    let newMedicament = new Medicaments(NomMedicament);
    newMedicament.save()
        .then(data => res.json(data))
        .catch(err => console.log(err.message))

});


//delete medicament
router.delete("/:id", (req, res) => {
    Medicaments.findByIdAndDelete(req.params.id)
    .then(()=>Medicaments.find({})
    .then( data=> res.json(data))
    )
    .catch(err=>console.log(err.message))
    
    });


    //Update medicament
router.put("/:id", (req, res)=>{
    const medicament=req.body
Medicaments.findByIdAndUpdate(req.params.id ,medicament)
.then(() => Medicaments.findById(req.params.id)
   .then(data=>res.json(data))
)
.catch(err=>console.log(err.message))

});
module.exports = router