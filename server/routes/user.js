const express = require('express')
// const chalk = require('chalk');
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/User')

router.post('/', async (req, res) => {
    const chalk = await import('chalk');
    const { username, password } = req.body
    const newUser = new User({
        name: username,
        password
    })
    try {
        await newUser.save();
        console.log(chalk.default.blue('User saved'));
        res.redirect('http://localhost:5173');
    } catch (err) {
        console.log("This is an error:", err);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router