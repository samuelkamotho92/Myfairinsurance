const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formSchema = new Schema({
    formId:{
        type:String,
         unique:true
    },
    emailUser:{
        type:String
    },
    formStatus:String,
    createdAt: {type: Date, default: Date.now}
})

formSchema.methods.approvedFormed = function() {
    console.log('whats wrong')
this.formStatus = 'approved';
}
formSchema.methods.rejectedFormed = function(){
    this.formStatus = 'rejected';
}
formSchema.methods.pendingFormed = function(){
    this.formStatus = 'pending';
}
const Formmodel =  mongoose.model('form',formSchema);
module.exports = Formmodel;