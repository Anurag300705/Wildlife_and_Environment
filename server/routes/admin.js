const express = require('express');
const createEvent = require('../controllers/admin')
const upload = require('../middlewares/multer')

const router = express.Router()

router.post('/event', upload.single('avatar'), createEvent)


module.exports = router;