const express = require('express')
const register = require('../controllers/user')

const router = express.Router()


router.post('/signup', register)
// router.post('/verify', verifyUser)

module.exports = router