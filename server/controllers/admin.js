const createEvent = (req, res) => {
    try {


        console.log(req.headers);
        console.log(req.file);
        console.log(req.body);
        res.send("Hello")
    } catch (err) {
        console.log("here is the error in the admin controller :", err)
        res.send("Problem ache").status(500)

    }
}

module.exports = createEvent;