const tryCatch = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next)
        } catch (err) {
            console.log("This is an error:", err);
            res.status(500).send('Internal Server Error').json({
                message: err.message
            });
        }
    }
}

module.exports = tryCatch