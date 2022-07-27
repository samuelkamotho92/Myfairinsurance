const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pageFiveSchema = new Schema({
    damagesDetails:{
        type:String,
        required:[true,'please give the details of the damages']
    },
    costRepairs:{
        type:String,
        required:[true,'please give the estimated cost of repair']
    },
    pointofInspection:{
        type:String,
        required:[true,'please enter where we can inspect the vehicle']
    },
    repairInstruction:{
        type:String,
        required:[true,'please enter if there is any instructions given']
    },
    nameofMechanic:{
        type:String,
        required:[true,'please enter name of the person to inspect vehicle']
    },
    addressofMechanic:{
        type:String,
        required:[true,'please enter address of the mechanic']
    },
    anyEstimate:{
        type:String,
        required:[true,'please enter if any estimate send to company']
    },
    estimateForm:{
        type:String,
    },
    emailUser:{
        type:String,
    }
})
const pageFivemodel = mongoose.model('pageFive',pageFiveSchema);
module.exports = pageFivemodel;