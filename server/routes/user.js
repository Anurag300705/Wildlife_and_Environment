const express = require('express')
const { myProfile, register } = require('../controllers/user')

const router = express.Router()


router.post('/signup', register)
// router.post('/verify', verifyUser)
router.get('/me', myProfile)

module.exports = router