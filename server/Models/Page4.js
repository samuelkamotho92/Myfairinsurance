const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pageFourSchema = new Schema({
    dateOccurence:{
        type:Date,
        required:[true,'please enter when the accident occured']
    },
    time:{
        type:String,
        required:[true,'please enter when the accident occured']
    },
    place:{
        type:String,
        required:[true,'please enter where the accident took place']
    },
    yourLocation:{
        type:String,
        required:[true,'were you in the vehicle']
    },
    positionVehicle:{
        type:String,
        required:[true,'please enter the position of car']
    },
    widthStreet:{
        type:String,
        required:[true,'please enter the position of car']
    },
    speedBefore:{
        type:String,
        required:[true,'please enter the speed of vehicle before']
    },
    speedDuring:{
        type:String,
        required:[true,'please enter the speed of vehicle during']
    },
    vehicleLocked:{
        type:String,
        required:[true,'please enter if vehicle door was locked or not'],
    },
  antitheft:{
        type:String,
        required:[true,'please enter if vehicle has anyantitheft device'],
    },
    natureAccident:{
        type:String,
        required:[true,'please enter nature of accident'],
    },
    causeAccident:{
        type:String,
        required:[true,'please enter cause of accident'],
    },
    sketchScene:{
        type:String,
    },
    emailUser:{
        type:String,
        },
        formIdUser:{
           type:String,
        unique:true
       }
})
const pageFourModel = mongoose.model('pageFour',pageFourSchema);
module.exports = pageFourModel;