const createEvent = (req, res) => {
    try {


        console.log(req.body);
        console.log(req.file);
        res.send("Hello")
    } catch (err) {
        console.log("here is the error in the admin controller :", err)
        res.send("Problem ache").status(500)

    }
}

module.exports = createEvent;