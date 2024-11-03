const mongoose = require("mongoose");
const exchangeSchema = mongoose.Schema({
  Date: {
    type: Number,
    required: true,
  },
  Species: {
    type: String,
    required: true,
  },

  SexRatio: {
    type: Number,
  },
  RecievedFrom: {
    type: String,
    required: true,
  },
});
const ExchangeAnimal = mongoose.model("ExchangeAnimal", exchangeSchema);
module.exports = ExchangeAnimal;
