const express = require('express')
// const chalk = require('chalk');
const router = express.Router()
const mongoose = require('mongoose')
const NB = require('../models/NewBorn')

router.post('/', async (req, res) => {
    const chalk = await import('chalk');
    const { species, birth } = req.body
    const newUser = new NB({
        species,
        birth
    })
    try {
        await newUser.save();
        console.log(chalk.default.blue('User saved'));
        // res.redirect('http://localhost:5173/NEW_BORN');
    } catch (err) {
        console.log("This is an error:", err);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/', async (req, res) => {
    try {
        const items = await NB.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
module.exports = router