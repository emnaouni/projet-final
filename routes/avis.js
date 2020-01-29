const express = require("express");
const router = express.Router();
const Avis = require("../models/Avis")


router.get("/:id", (req, res) => {
     Avis.find({Medecin_id: req.params.id})
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
router.post("/", (req, res) => {
    const { comentaire,Medecin_id,Patient_id } = req.body;
    let newAvis = new Avis({
        comentaire,
        Medecin_id,
        Patient_id
    });
    newAvis
      .save()
      .then(data => res.json(data))
      .catch(err => console.log(err.message));
  });
  router.delete("/:id", (req, res) => {
    Avis.findByIdAndDelete(req.params.id)
      .then(data => {
        if (!data) {
          res.json({ msg: "avis Not found" });
        } else {
          res.json({ msg: "avis Deleted!" });
         
        }
      })
      .catch(err => console.error(err.message));
  });
  router.put("/:id", (req, res)=>{
    const avis=req.body
Avis.findByIdAndUpdate(req.params.id ,avis)
.then(() => Avis.findById(req.params.id)
   .then(data=>res.json(data))
)
.catch(err=>console.log(err.message))

});
  module.exports = router;