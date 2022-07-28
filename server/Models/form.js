const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formSchema = new Schema({
    email:{
        type:String,
        unique:true
    },
    formId:{
        type:String,
        unique:true
    },
    createdAt:Date,
})

const Formmodel =  mongoose.model('form',formSchema);
module.exports = Formmodel;