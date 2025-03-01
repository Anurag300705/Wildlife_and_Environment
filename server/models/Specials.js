const mongoose = require("mongoose");
const specialSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Speciality: {
    type: String,
    required: true,
  },

});
const specialAnimal = mongoose.model("SpecialAnimal", specialSchema);
module.exports = specialAnimal;
