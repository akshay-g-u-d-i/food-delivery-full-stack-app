const express = require('express')
const router = express.Router()
const User = require('../models/User')

const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = "mynameisisdfhhfdoifhihghikdhfh"

router.post('/createuser',
    body('email', 'This is not an email').isEmail(),
    body('name', 'Minimum length should be 5 characters').isLength({ min: 5 }),
    body('password', 'Minimum length should be 5 characters').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPasskey = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                'name': req.body.name,
                'location': req.body.location,
                'email': req.body.email,
                'password': secPasskey,
            })

            res.json({ success: true })
        } catch (err) {
            console.log(err)
            res.json({ success: false })
        }
    }
)

router.post('/loginuser',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;
        let password = req.body.password;

        try {
            let userdata = await User.findOne({ email });
            if (!userdata) {

                return res.json({success:false, email: false})
            }
            const isMatch = await bcrypt.compare(password, userdata.password)

            if (!isMatch) {

                console.log("User login failed")
                return res.json({success:false, email:true})

            }

            const data = {
                user:{
                    id: userdata.id,
                }
            }

            const authToken = jwt.sign(data, jwtSecret)

            // console.log("User login is successful!")
            global.name = userdata.name;


            return res.json({ success: true, authToken: authToken, name: global.name })

        }
        catch (err) {
            console.log(err)
        }
    })

module.exports = router;