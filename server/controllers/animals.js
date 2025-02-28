const SpecialAnimal = require("../models/Specials");
const addSpecial = async (req, res) => {
  try {
    const newSpecial = new SpecialAnimal(req.body);
    await newSpecial.save();
    res.status(201).json(newSpecial);
    console.log("Data saved");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = addSpecial