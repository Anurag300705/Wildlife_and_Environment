const express = require('express')
// const chalk = require('chalk');
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const chalk = await import('chalk');
    const { username, password } = req.body
    // const newUser = new User({
    //     name: username,
    //     password
    // })


    try {
        // await newUser.save();
        // console.log(chalk.default.blue('User saved'));
        // res.redirect('http://localhost:5173');
        // res.redirect('/login')
        // res.send(`<h1>Hello${username}</h1>`)
        User.findOne(({ name: username }))
            .then(async user => {
                if (user) {
                    const matchPass = await bcrypt.compare(password, user.password)
                    console.log(matchPass)
                    if (!matchPass) {
                        return res.status(469).json({
                            message: "Password vul ache",
                        })
                    }

                    const token = jwt.sign({ _id: user._id }, process.env.jwt_sec, {
                        expiresIn: "1d"
                    })

                    res.json({
                        message: `welcome back baby ${user.name}`,
                        token,
                        user
                    })
                }
                else {
                    console.log("No user found")
                    return res.status(469).json({
                        message: "K tui bol"
                    })
                }
            })
            .catch(error => console.log('Here is the error :\n', error))
    } catch (err) {
        console.log("This is an error:", err);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router