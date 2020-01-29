const express = require("express");
const router = express.Router();
const Personne = require("../models/Personne");
const { check, validationResult } = require("express-validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth= require('../middleware/auth')

const jwtSecrect = "secret"
//get the logged in user
//Private router
router.get('/',auth, (req, res) => {
   Personne.findById(req.user.id)
   .then(user=>res.json(user))
   .catch(err=>console.log(err.message))
})

//login the user
router.post("/", [
    check('Email', 'Please include a valide email!!').isEmail(),
    check('password', 'Password is required').not().isEmpty()

], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.send({ errors: errors.array() })
    }
    const { Email, password } = req.body;
    Personne.findOne({ Email })
        .then(user => {
            if (!user) {
                //Check is user exists
                return res.json({ msg: "Plase Register Before!" })
            } else {
                console.log(req.body)
                //compare Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.log(err.message)
                    } else if (isMatch) {
                        const payload = {
                            user: {
                                id: user.id,
                                role: user.Role
                            }
                        }
                        jwt.sign(payload, jwtSecrect, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.json({ token })
                        })
                    }
                    else {
                        return res.json({ msg: 'Wrong password' })
                    }
                })
            }
        })
        .catch(err => console.log(err.message))
})




module.exports = router