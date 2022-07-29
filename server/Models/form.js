const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formSchema = new Schema({
    formId:{
        type:String,
         unique:true
    },
    createdAt: {type: Date, default: Date.now}
})

const Formmodel =  mongoose.model('form',formSchema);
module.exports = Formmodel;