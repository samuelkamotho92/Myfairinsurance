const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pageEightSchema = new Schema({
    Date:{
        type:String,
        required:[true,'please enter any claim made']
    },
    fullNameWitness:{
        type:String,
        required:[true,'please enter witness fullname']
    },
    addressWitness:{
        type:String,
        required:[true,'please enter address']
    },
    signature:{
        type:String
    }
})
const pageEightmodel = mongoose.model('pageEight',pageEightSchema);
module.exports = pageEightmodel;