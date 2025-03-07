const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        console.log(uniqueSuffix)
        const ext = file.originalname.split('.')
        const n = ext.length
        cb(null, `${file.fieldname}-${uniqueSuffix}.${ext[n - 1]}`)
    }
})

const upload = multer({ storage: storage })

module.exports = upload