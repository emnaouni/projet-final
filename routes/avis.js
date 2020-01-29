const express = require("express");
const router = express.Router();
const Rdv = require("../models/Avis");



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