const express = require("express");
const router = express.Router();
const maladie = require("../models/maladie");

router.get("/", (req, res) => {
    maladie.find()
    .then(maladies => res.json(maladies))
    .catch(err => console.log(err.message));
});


router.post("/", (req, res) => {
  const { NomMaladie } = req.body;
  let newMaladie = new maladie({
    NomMaladie
  });
  newMaladie
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err.message));
});

router.delete("/:id", (req, res) => {
  maladie.findByIdAndDelete(req.params.id)
    .then(data => {
      if (!data) {
        res.json({ msg: "maladie Not found" });
      } else {
        res.json({ msg: "maladie Deleted!" });
       
      }
    })
    .catch(err => console.error(err.message));
});


router.put("/:id", (req, res) => {
  let newInfo = req.body;
  maladie.findByIdAndUpdate(
    req.params.id,
    { $set: { ...newInfo } },
    (err, data) => {
      if (err) throw err;
      else {
        if (!data) {
          res.json({ msg: "Not Found" });
        } else {
          maladie.findById(req.params.id)
            .then(ml => res.json(ml))
            .catch(err => console.error(err.message));
        }
      }
    }
  );
});



router.get("/:id", (req, res) => {
  maladie.findOne({_id:req.params.id})
    .then(ml => {
      if (!ml) {
        res.json({ msg: "maladie Not Found" });
      } else {
        res.json(ml);
      }
    })
    .catch(err => console.error(err.message));
});


module.exports = router;