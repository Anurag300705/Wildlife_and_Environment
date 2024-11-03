const mongoose =require ("mongoose")
const rescuedAnimalSchema=mongoose.Schema({
  Date: {
    type: Number,
    required: true
},
  Species: {
    type: String,
    required: true
},
  NoOfSpecies: {
    type: Number,
    required: true
},
  SexRatio: {
    type: Number,
    
},
RecievedFrom:{
  type:String,
  required:true
}


})
const RescuedAnimal = mongoose.model('RescuedAnimal', rescuedAnimalSchema)
module.exports = RescuedAnimal