const express = require('express')
const { register, verifyUser } = require('../controllers/user')

const router = express.Router()


router.post('/signup', register)
router.post('/verify', verifyUser)

module.exports = router