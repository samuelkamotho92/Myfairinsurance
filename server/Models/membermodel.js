const mongoose = require("mongoose");
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const Schema = mongoose.Schema;
const memberSchema = new Schema({
    name:{
        type:String,
        minlength:[4,'enter a min length of 4 character'],
        required:[true,'please enter your name']
    },
    email:{
        type:String,
        required:[true,'please enter your email'],
        validate:[isEmail,'please enter a a valid email'],
        lowercase:true,
        unique:[true]
    },
    password:{
        type:String,
        required:[true,'please enter your password'],
        minlength:[8,"please enter 8 or more characters"],
    },
    passwordConfirm:{
        type:String,
        required:[true,'please enter a password confirmation'],
      validate:{
        validator:function(el){
                return el === this.password
            },
            message:'password confirmation does not match try again '
      }
    },
    loginToken:String,
    loginAt:Date,
    loginTokenExpires:Date,
    memberStatus:String,
    passwordResetToken: String,
    passwordResetExpires: Date
})

//newlogin link
memberSchema.methods.createLoginToken = function() {
const lgdTk= crypto.randomBytes(32).toString('hex');
  //hashing the token and save it to database
    this.loginToken = crypto
      .createHash('sha256')
      .update(lgdTk)
      .digest('hex');
    console.log({ lgdTk }, this.loginToken);
  //set the expiring time for the token a full month to login
    this.loginTokenExpires = Date.now() + 30 * 24 * 60 * 60 * 1000;
    this.memberStatus = 'approved';
  //return the unhashed password
    return lgdTk;
  };

  memberSchema.methods.rejectedMember = function() {
  this.memberStatus  = 'disapproved';
  }

  //reset password token
  memberSchema.methods.createPasswordResetToken = function(){
   const resetTk = crypto.randomBytes(32).toString('hex');
this.passwordResetToken = crypto
.createHash('sha256')
.update(resetTk)
.digest('hex');
//set the expiring time for the token 1 day
this.passwordResetExpires = Date.now() + 24 * 60 * 60 * 1000;
//return the unhashed password
  return resetToken;
  }


  //login user
  memberSchema.statics.login = async function (email,password) {
    //this reffers to the model  
    //returns the colection that matches
    const user = await this.findOne({email,
      memberStatus:'approved'});
    if(user)
    {
        //comapres the password
  // const auth = await bcrypt.compare(password,user.password);
  if(password == user.password){
    user.loginToken = undefined;
     user.loginTokenExpires = undefined;
 return user;
  }
  throw Error("incorrect password");
    }
    throw Error("incorrect email or not yet approved");
  }

const membermodel = mongoose.model('member',memberSchema);
module.exports = membermodel;