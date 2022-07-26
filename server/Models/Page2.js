const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pageTwoSchema = new Schema({
   make:{
    type:String,
    required:[true,'please enter the car make'],
   },
   horsepw:{
    type:String,
    required:[true,'please enter the car horse power'],
   },
   regno:{
    type:String,
    required:[true,'please enter your car registration no'],
    minlength:[4,'enter a min 4 characters'],
},
   price:{
    type:String,
    required:[true,'please enter the price']
   },
   yearmanu:{
    type:Date,
    required:[true,'please enter the year it was nanufactured'],
   },
   datepurch:{
    type:Date,
    required:[true,'please enter the data it was purchased'],
   },
   stateVehicle:{
    type:String,
    required:[true,'please enter if vehicle is old or new'],
   },
   purposeVehicle:{
    type:String,
    required:[true,'Please enter the purpose of the vehicle'],
   },
   age:{
      type:String,
      required:[true,'Please enter the purpose of the vehicle'],
   },
   order:{
    type:String,
    required:[true,'please enter the order of vehicle in time of accident']
   },
   mileage:{
    type:String,
required:[true,'please enter if there was mileage at Time of Accident/theft/fire']
   },
   knowledge:{
    type:String,
    required:[true,'please enter if vehicle was used with your knowledge']
   },
   passenger:{
    type:String,
    required:[true,'please enter if the passenger was being carried at point of accident']
   },
   hauled:{
    type:String,
    required:[true,'please enter if the trailer was hauled']
   },
   nature:{
    type:String,
    required:[true,'please enter the nature of goods being carried at time of accident']
   },
   goodsOwner:{
    type:String,
    required:[true,'please enter the name of goods owner']
   }
})
const pageTwoModel = mongoose.model('pageTwo',pageTwoSchema);
module.exports = pageTwoModel;