const express = require("express");
const router = express.Router();
const Analyses = require("../models/Analyses");


//Get all Analyses
router.get("/", (req, res) => {
     Analyses.find({})
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
// Add analyse
router.post("/", (req, res) => {
    const NomAnalyse = req.body;
    let newAnalyse = new Analyses(NomAnalyse);
    newAnalyse.save()
        .then(data => res.json(data))
        .catch(err => console.log(err.message))

});


//delete analyse
router.delete("/:id", (req, res) => {
    Analyses.findByIdAndDelete(req.params.id)
    .then(()=>Analyses.find({})
    .then( data=> res.json(data))
    )
    .catch(err=>console.log(err.message))
    
    });


    //Update analsyse
router.put("/:id", (req, res)=>{
    const analyse=req.body
Analyses.findByIdAndUpdate(req.params.id , analyse)
.then(() => Analyses.findById(req.params.id)
   .then(data=>res.json(data))
)
.catch(err=>console.log(err.message))

});
module.exports = router