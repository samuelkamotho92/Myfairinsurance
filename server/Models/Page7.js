const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const pageSevenSchema = new Schema({
    claimMade:{
        type:String,
        required:[true,'please enter any claim made']
    },
    claimForm:String,
    accidentThirdParty:{
        type:String,
        required:[true,'please fill missing info ']
    },
        insuranceCompany:{
        type:String,
        required:[true,'please enter name of the insurance company']
    },
    regno:{
        type:String,
        required:[true,'please enter vehicles reg no'],
        unique:[true,'please enter a unique value']
    },
    certno:{
        type:String,
        required:[true,'please enter your cert no'],
        unique:[true,'please enter a unique one']
    },
    nameDriver:{
        type:String,
        required:[true,'please enter name of Driver']
    },
        passengers:
        {
        type:Number,
        required:[true,'please enter number of passengers at time of accident']
    },
     witnessName:{
        type:String,
        required:[true,'please enter witness name']
    },
        witnessAdress:{
        type:String,
        required:[true,'please enter witness address']
    },
    reportedPolice:{
        type:String,
        required:[true,'please enter if reported']
    },
        namepoliceStation:{
        type:String,
        required:[true,'please enter name of police station']
    },
    policeStationNo:{
        type:Number,
        required:[true,'please enter police station no']
    },
        dateReported:{
        type:Date,
        required:[true,'please enter Date']
    },
    actionTaken:{
        type:String,
        required:[true,'please enter action taken by police']
    },
     anyInsurance:{
        type:String,
        required:[true,'please enter any other insurance on vehicle']
    },
    premiumPaid:{
        type:String,
        required:[true,'please enter if you have paid']
    },
    lodgedBefore:{
        type:String,
        required:[true,'ever lodged a claim']
    },
    claimsParticulars:{
        type:String,
        required:[true,'particulars for lodged claim']
    }
})

const pageSevenmodel = mongoose.model('pageSeven',pageSevenSchema);
module.exports = pageSevenmodel;








