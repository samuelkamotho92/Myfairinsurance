const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pageOneSchema = new Schema({
   policyNo:{
    type:Number,
    required:[true,'please enter your policy number'],
   },
   claimNo:{
    type:Number,
    required:[true,'please enter your claim number'],
   },
   renewDate:{
    type:Date,
    required:[true,'please enter your renew date'],
   },
   insuredName:{
    type:String,
    required:[true,'please enter your name'],
    minlength:[4,'enter a min 4 characters'],
   },
   postalAddress:{
    type:String,
    required:[true,'please enter your Address'],
    minlength:[8,'enter 8 or more characters']
   },
   tellNo:{
    type:Number,
    required:[true,'please enter your Phone number'],
    minlength:[10,'enter 10 or more characters']
   },
   street:{
    type:String,
    required:[true,'please enter your street Adress number'],
   },
   district:{
    type:String,
    required:[true,'Please enter yor District'],
   },
   occupation:{
      type:String,
      required:[true,'Please enter yor Occupation'],
   },
   emailUser:{
   type:String,
   },
   formIdUser:{
      type:String
  },
})
const pageOneModel = mongoose.model('pageOne',pageOneSchema);
module.exports = pageOneModel