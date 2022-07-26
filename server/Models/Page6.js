const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pageSixSchema = new Schema({
    anyInjuries:{
        type:String,
        required:[true,'please enter if there is any Injuries']
    },
    nameofPatient:{
        type:String,
        required:[true,'please enter  name of the injured person']
    },
    addressofPatient:{
        type:String,
        required:[true,'please enter address of the injured person']
    },
    occupationofPatient:{
        type:String,
        required:[true,'please enter occupation of the injured person']
    },
    natureofInjuries:{
        type:String,
        required:[true,'please enter the  nature of the injuries']
    },
    conveyed:{
        type:String,
        required:[true,'please enter if he was conveyed in or not']
    },
    medicalyAttended:{
        type:String,
        required:[true,'please enter missing info']
    },
    hospitalName:{
        type:String,
        required:[true,'please enter  name of the hosiptal']
    },
    hospitalAddress:{
        type:String,
        required:[true,'please enter the address of the hospital']
    },
    harmProperty:{
        type:String,
        required:[true,'please enter missing info']
    },
    namOwner:{
        type:String,
        required:[true,'please enter name of the affected owner']
    },
    addressOwner:{
        type:String,
        required:[true,'please enter address of the owner']
    },
    natureDamage:{
        type:String,
        required:[true,'please enter  nature of Damage']
    }
})
const pageSixmodel = mongoose.model('pageSix',pageSixSchema);
module.exports = pageSixmodel;