const express = require('express')
// const chalk = require('chalk');
const router = express.Router()
const mongoose = require('mongoose')
const addSpecial = require('../controllers/animals')

router.post('/Special', addSpecial)

module.exports = router