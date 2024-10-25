const express = require('express')
// const chalk = require('chalk');
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('../middlewares/sendMail')

router.post('/', async (req, res) => {
    try {
        const chalk = await import('chalk');
        const { username, password } = req.body


        //check for existing user
        let user = await User.findOne({ "name": username })
        if (user) return res.status(420).json({
            message: "Tor naam ache re",
        })

        // //Password hash
        const saltRounds = 11
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPass = await bcrypt.hash(String(password), salt)

        //jwt
        user = {
            name: username,
            password: hashedPass
        }

        const otp = Math.floor(Math.random() * 1000000)
        const activationToken = jwt.sign({
            user,
            otp,
        }, process.env.SECRET_KEY, {
            expiresIn: "5m",
        })

        const data = {
            otp,
        }

        await sendMail(username, "Wildlife otp", data)




        res.status(201).json({
            message: "Otp send to your mail",
            activationToken
        })
        // const newUser = new User({
        //     name: username,
        //     password
        // })
        // try {
        //     await newUser.save();
        //     console.log(chalk.default.blue('User saved'));
        //     res.redirect('http://localhost:5173');
        // } catch (err) {
        //     console.log("This is an error:", err);
        //     res.status(500).send('Internal Server Error');
        // }
    } catch (err) {
        console.log("This is an error:", err);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router