const express = require("express");
const router = express.Router();
const Rdv = require("../models/Rdv");


//Get all rdv d'un medecin
router.get("/:id", (req, res) => {
     Rdv.find({Medecin_id: req.params.id})
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
router.post("/", (req, res) => {
    const AddRDV = req.body;
    let newRDV = new Rdv(AddRDV);
    newRDV.save()
        .then(data => res.json(data))
        .catch(err => console.log(err.message))

});


//delete Rdv
router.delete("/:id", (req, res) => {
    Analyses.findByIdAndDelete(req.params.id)
    .then(()=>Analyses.find({})
    .then( data=> res.json(data))
    )
    .catch(err=>console.log(err.message))
    
    });


    //Update analsyse
router.put("/:id", (req, res)=>{
    const rdv=req.body
Analyses.findByIdAndUpdate(req.params.id , rdv)
.then(() => Rdv.findById(req.params.id)
   .then(data=>res.json(data))
)
.catch(err=>console.log(err.message))

});
module.exports = router