const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pageThreeSchema = new Schema({
   namePers:{
    type:String,
    required:[true,'please enter the car make'],
   },
   address:{
    type:String,
    required:[true,'please enter the car horse power'],
   },
   age:{
    type:Number,
    required:[true,'please enter your car registration no'],
    minlength:[4,'enter a min 4 characters'],
},
 occupation:{
    type:String,
    required:[true,'please enter the price']
   },
   licenseNo:{
      type:Number,
      required:[true,'please enter License no']
   },
   dateofIssue:{
      type:Date,
      required:[true,'please enter Date of Issue']
   },
   placeIssue:{
      type:String,
      required:[true,'please enter Place of Issue']
   },
   dateofExpiray:{
      type:Date,
      required:[true,'please enter Date of Expiray']
   },
   renewalNo:{
      type:Number,
      required:[true,'please enter License no']
   },
   validUpto:{
      type:Date,
      required:[true,'please enter new validity']
   },
   typeLicense:{
      type:String,
      required:[true,'please enter type of license']
   },
   statusDriver:{
      
      type:String,
      required:[true,'please enter status of Driver'] 
   },
   statusLicenses:{
      type:String,
      required:[true,'please enter status of license'] 
   },

   driverProsecuted:{
      type:String,
      required:[true,'please enter if driver  has ever been prosecuted'] 
   },
   priorAccident:{
      type:String,
      required:[true,'any prior accidents'] 
   },
   driverInsurance:{
      type:String,
      required:[true,'insurance been denied']
   },
   driverExpirience:{
      type:String,
      required:[true,
      'please fill the missing information']
   },
   anyotherInsurance:{
      type:String,
      required:[true,'please fill in the missing information']
   },
   sobberness:{
   type:String,
   required:[true,
      'please fill the missing -information']
   },
   emailUser:{
      type:String,
      default:'none'
      },
      formIdUser:{
         type:String,
          default:'none'
     },
     currentFormidenty:{
      type:String
     }
})
const pageThreeModel = mongoose.model('pageThree',pageThreeSchema);
module.exports = pageThreeModel;